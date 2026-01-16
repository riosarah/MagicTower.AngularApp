//@GeneratedCode
import { IdType, IdDefault } from '@app-models/i-key-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEntityBaseService } from '@app-services/api-entity-base.service';
import { environment } from '@environment/environment';
import { IDefeatedEnemy } from '@app-models/entities/game/i-defeated-enemy';
//@CustomImportBegin
//@CustomImportEnd
@Injectable({
  providedIn: 'root',
})
export class DefeatedEnemyService extends ApiEntityBaseService<IDefeatedEnemy> {
  constructor(public override http: HttpClient) {
    super(http, environment.API_BASE_URL + '/defeatedenemies');
  }

  public override getItemKey(item: IDefeatedEnemy): IdType {
    return item?.id || IdDefault;
  }

//@CustomCodeBegin
//@CustomCodeEnd
}
