//@GeneratedCode
import { Directive } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IdType, IdDefault, IKeyModel } from '@app/models/i-key-model';
import { GenericEditComponent } from '@app/components/base/generic-edit.component';
import { IGameSession } from '@app-models/entities/game/i-game-session';
//@CustomImportBegin
//@CustomImportEnd
@Directive()
export abstract class GameSessionBaseEditComponent extends GenericEditComponent<IGameSession> {
  constructor()
  {
    super();
  }

  public override getItemKey(item: IGameSession): IdType {
    return item?.id || IdDefault;
  }

  public override get title(): string {
    return 'GameSession' + super.title;
  }
//@CustomCodeBegin
//@CustomCodeEnd
}
