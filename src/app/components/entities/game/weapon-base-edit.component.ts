//@GeneratedCode
import { Directive } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IdType, IdDefault, IKeyModel } from '@app/models/i-key-model';
import { GenericEditComponent } from '@app/components/base/generic-edit.component';
import { IWeapon } from '@app-models/entities/game/i-weapon';
//@CustomImportBegin
//@CustomImportEnd
@Directive()
export abstract class WeaponBaseEditComponent extends GenericEditComponent<IWeapon> {
  constructor()
  {
    super();
  }

  public override getItemKey(item: IWeapon): IdType {
    return item?.id || IdDefault;
  }

  public override get title(): string {
    return 'Weapon' + super.title;
  }
//@CustomCodeBegin
//@CustomCodeEnd
}
