//@GeneratedCode
import { IdType, IdDefault } from '@app-models/i-key-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEntityBaseService } from '@app-services/api-entity-base.service';
import { environment } from '@environment/environment';
import { ICharacter } from '@app-models/entities/game/i-character';
//@CustomImportBegin
//@CustomImportEnd
@Injectable({
  providedIn: 'root',
})
export class CharacterService extends ApiEntityBaseService<ICharacter> {
  constructor(public override http: HttpClient) {
    super(http, environment.API_BASE_URL + '/characters');
  }

  public override getItemKey(item: ICharacter): IdType {
    return item?.id || IdDefault;
  }

//@CustomCodeBegin
//@CustomCodeEnd
}
