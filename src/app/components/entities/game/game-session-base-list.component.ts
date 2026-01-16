//@GeneratedCode
import { Directive, inject } from '@angular/core';
import { GenericEntityListComponent } from '@app/components/base/generic-entity-list.component';
import { IGameSession } from '@app-models/entities/game/i-game-session';
import { GameSessionService } from '@app-services/http/entities/game/game-session-service';
//@CustomImportBegin
//@CustomImportEnd
@Directive()
export abstract class GameSessionBaseListComponent extends GenericEntityListComponent<IGameSession> {
  constructor()
  {
    super(inject(GameSessionService));
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }
//@CustomCodeBegin
//@CustomCodeEnd
}
