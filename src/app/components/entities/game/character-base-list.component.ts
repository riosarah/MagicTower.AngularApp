//@GeneratedCode
import { Directive, inject } from '@angular/core';
import { GenericEntityListComponent } from '@app/components/base/generic-entity-list.component';
import { ICharacter } from '@app-models/entities/game/i-character';
import { CharacterService } from '@app-services/http/entities/game/character-service';
//@CustomImportBegin
//@CustomImportEnd
@Directive()
export abstract class CharacterBaseListComponent extends GenericEntityListComponent<ICharacter> {
  constructor()
  {
    super(inject(CharacterService));
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }
//@CustomCodeBegin
//@CustomCodeEnd
}
