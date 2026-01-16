//@GeneratedCode
import { Directive } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IdType, IdDefault, IKeyModel } from '@app/models/i-key-model';
import { GenericEditComponent } from '@app/components/base/generic-edit.component';
import { ICharacter } from '@app-models/entities/game/i-character';
//@CustomImportBegin
//@CustomImportEnd
@Directive()
export abstract class CharacterBaseEditComponent extends GenericEditComponent<ICharacter> {
  constructor()
  {
    super();
  }

  public override getItemKey(item: ICharacter): IdType {
    return item?.id || IdDefault;
  }

  public override get title(): string {
    return 'Character' + super.title;
  }
//@CustomCodeBegin
//@CustomCodeEnd
}
