import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { GameChatService, ChatMessage, GameStateDto } from '../../services/game-chat.service';

@Component({
  selector: 'app-game-chat',
  templateUrl: './game-chat.component.html',
  styleUrls: ['./game-chat.component.css'],
  standalone: false
})
export class GameChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatMessages') private chatMessagesContainer!: ElementRef;
  
  conversationHistory: ChatMessage[] = [];
  gameState: GameStateDto | null = null;
  userInput: string = '';
  currentMessage: string = '';
  isLoading: boolean = false;
  private shouldScroll = false;

  // Quick Actions
  quickActions = [
    { label: 'Angreifen', message: 'Ich greife an!' },
    { label: 'Spezialangriff', message: 'Ich nutze meinen Spezialangriff!' },
    { label: 'Status', message: 'Zeige mir meinen aktuellen Status' },
    { label: 'Nächstes Stockwerk', message: 'Ich gehe zum nächsten Stockwerk' }
  ];

  constructor(
    private chatService: GameChatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Conversation History abonnieren
    this.chatService.conversationHistory$.subscribe(history => {
      this.conversationHistory = history;
      this.shouldScroll = true;
    });

    // Game State abonnieren
    this.chatService.gameState$.subscribe(state => {
      this.gameState = state;
      console.log('Game State Updated:', state);
    });

    // Prüfen ob Character & Session vorhanden sind
    this.checkAndInitializeSession();
  }

  /**
   * Prüft ob Charakter vorhanden ist und zeigt passende Willkommensnachricht
   */
  private checkAndInitializeSession(): void {
    const characterId = this.chatService.getCharacterId();
    const sessionId = this.chatService.getSessionId();

    console.log('=== CHECKING SESSION ===');
    console.log('Character ID:', characterId);
    console.log('Session ID:', sessionId);

    if (this.conversationHistory.length === 0) {
      if (characterId) {
        // Charakter vorhanden - KI wird Session starten
        this.addSystemMessage(
          `Willkommen zurück!\n\n` +
          `Charakter ID ${characterId} geladen.\n\n` +
          `Schreibe z.B.: "Starte ein Abenteuer auf mittlerer Schwierigkeit" oder "Zeige meinen Status"`
        );
      } else {
        // Kein Charakter - KI erstellt alles
        this.addSystemMessage(
          `Willkommen beim magischen Turm!\n\n` +
          `Ich bin Zorro dein magischer Begleiter.\n\n` +
          `Ich werde dir helfen dich durch die zahlreichen Ebenen zu kämpfen und Ruhm und Sieg zu erlangen.\n\n` +
          `Was für ein Abenteurer bist du?\n` + 
          `Ein Krieger, ein Schütze oder gar Druide?\n` +
          `Stell dich schnell vor, denn ich höre schon Schritte.\n` 
        );
      }
    }
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  sendMessage(message?: string): void {
    const messageToSend = message || this.currentMessage.trim();
    if (!messageToSend) return;

    this.isLoading = true;
    this.chatService.sendMessage(messageToSend).subscribe({
      next: (response) => {
        console.log('=== COMPONENT RECEIVED RESPONSE ===');
        console.log('Full Response:', response);
        console.log('Success:', response.success);
        console.log('Data:', response.data);
        
        if (!response.success) {
          console.error('Response not successful:', response.message || response.error);
          this.addSystemMessage(`Fehler: ${response.message || response.error || 'Unbekannter Fehler'}`);
        } else {
          console.log('Response successful - AI message should be in conversation history now');
          console.log('Game State from response:', response.data?.gameState);
        }
        
        this.currentMessage = '';
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Chat error:', error);
        this.addSystemMessage('Verbindungsfehler zum Server. Bitte versuche es erneut.');
        this.isLoading = false;
      }
    });
  }

  startNewGame(): void {
    this.chatService.resetChat();
    this.addSystemMessage(
      'Neues Abenteuer gestartet!\n\n' +
      'Stell mir deinen Charakter vor!\n\n' +
      'Nenne mir deinen Namen und deine Klasse (Krieger, Schütze, Druide)'
    );
  }

  useQuickAction(action: any): void {
    this.sendMessage(action.message);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  private addSystemMessage(content: string): void {
    const systemMessage: ChatMessage = {
      role: 'assistant',
      content: content,
      timestamp: new Date()
    };
    this.conversationHistory = [...this.conversationHistory, systemMessage];
    this.shouldScroll = true;
  }

  private scrollToBottom(): void {
    try {
      if (this.chatMessagesContainer) {
        this.chatMessagesContainer.nativeElement.scrollTop = 
          this.chatMessagesContainer.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error('Scroll error:', err);
    }
  }

  getHealthPercentage(current: number, max: number): number {
    return (current / max) * 100;
  }

  getHealthBarClass(current: number, max: number): string {
    const percentage = this.getHealthPercentage(current, max);
    if (percentage > 60) return 'bg-success';
    if (percentage > 30) return 'bg-warning';
    return 'bg-danger';
  }

  getDifficultyLabel(difficulty: number | undefined): string {
    if (difficulty === 10) return 'Einfach';
    if (difficulty === 20) return 'Mittel';
    return 'Schwer';
  }

  getTowerProgress(): number {
    if (!this.gameState?.gameSession) return 0;
    return (this.gameState.gameSession.currentFloor / this.gameState.gameSession.maxFloor) * 100;
  }
}
