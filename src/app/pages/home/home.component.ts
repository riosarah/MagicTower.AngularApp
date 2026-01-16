import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent implements OnInit {
  characters: any[] = [];
  loading = false;

  constructor(
    private router: Router,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.loading = true;
    this.gameService.getAllCharacters().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.characters = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Fehler beim Laden der Charaktere:', error);
        this.loading = false;
      }
    });
  }

  startNewGame(): void {
    this.router.navigate(['/character-creation']);
  }

  continueGame(character: any): void {
    // Navigate to game session selection or directly to combat
    this.router.navigate(['/combat'], { queryParams: { characterId: character.id } });
  }

  /**
   * Startet Chat Gameplay mit bestehendem Charakter
   */
  startChatGameplay(character: any): void {
    console.log('=== STARTING CHAT GAMEPLAY ===');
    console.log('Character:', character);

    
    // Navigiere zum Chat - Session wird von KI erstellt
    this.router.navigate(['/game-chat']);
  }

  /**
   * Startet neuen Chat ohne Charakter - KI erstellt alles
   */
  startNewChatGame(): void {
    
    // Navigiere zum Chat - KI erstellt Charakter und Session
    this.router.navigate(['/game-chat']);
  }

  getClassDisplayName(characterClass: number): string {
    switch (characterClass) {
      case 1:
        return 'Warrior';
      case 2:
        return 'Archer';
      case 3:
        return 'Druid';
      default:
        return 'Unknown';
    }
  }
}
