//@GeneratedCode
import { Directive, inject } from '@angular/core';
import { GenericEntityListComponent } from '@app/components/base/generic-entity-list.component';
import { IDefeatedEnemy } from '@app-models/entities/game/i-defeated-enemy';
import { DefeatedEnemyService } from '@app-services/http/entities/game/defeated-enemy-service';
//@CustomImportBegin
//@CustomImportEnd
@Directive()
export abstract class DefeatedEnemyBaseListComponent extends GenericEntityListComponent<IDefeatedEnemy> {
  constructor()
  {
    super(inject(DefeatedEnemyService));
  }
  override ngOnInit(): void {
    super.ngOnInit();
  }
//@CustomCodeBegin
//@CustomCodeEnd
}
