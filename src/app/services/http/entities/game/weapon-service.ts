//@GeneratedCode
import { IdType, IdDefault } from '@app-models/i-key-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEntityBaseService } from '@app-services/api-entity-base.service';
import { environment } from '@environment/environment';
import { IWeapon } from '@app-models/entities/game/i-weapon';
//@CustomImportBegin
//@CustomImportEnd
@Injectable({
  providedIn: 'root',
})
export class WeaponService extends ApiEntityBaseService<IWeapon> {
  constructor(public override http: HttpClient) {
    super(http, environment.API_BASE_URL + '/weapons');
  }

  public override getItemKey(item: IWeapon): IdType {
    return item?.id || IdDefault;
  }

//@CustomCodeBegin
//@CustomCodeEnd
}
