//@GeneratedCode
import { Directive } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IdType, IdDefault, IKeyModel } from '@app/models/i-key-model';
import { GenericEditComponent } from '@app/components/base/generic-edit.component';
import { IDefeatedEnemy } from '@app-models/entities/game/i-defeated-enemy';
//@CustomImportBegin
//@CustomImportEnd
@Directive()
export abstract class DefeatedEnemyBaseEditComponent extends GenericEditComponent<IDefeatedEnemy> {
  constructor()
  {
    super();
  }

  public override getItemKey(item: IDefeatedEnemy): IdType {
    return item?.id || IdDefault;
  }

  public override get title(): string {
    return 'DefeatedEnemy' + super.title;
  }
//@CustomCodeBegin
//@CustomCodeEnd
}
