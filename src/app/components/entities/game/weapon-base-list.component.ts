//@GeneratedCode
import { Directive, inject } from '@angular/core';
import { GenericEntityListComponent } from '@app/components/base/generic-entity-list.component';
import { IWeapon } from '@app-models/entities/game/i-weapon';
import { WeaponService } from '@app-services/http/entities/game/weapon-service';
//@CustomImportBegin
//@CustomImportEnd
@Directive()
export abstract class WeaponBaseListComponent extends GenericEntityListComponent<IWeapon> {
  constructor()
  {
    super(inject(WeaponService));
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }
//@CustomCodeBegin
//@CustomCodeEnd
}
