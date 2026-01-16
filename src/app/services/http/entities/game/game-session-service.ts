//@GeneratedCode
import { IdType, IdDefault } from '@app-models/i-key-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEntityBaseService } from '@app-services/api-entity-base.service';
import { environment } from '@environment/environment';
import { IGameSession } from '@app-models/entities/game/i-game-session';
//@CustomImportBegin
//@CustomImportEnd
@Injectable({
  providedIn: 'root',
})
export class GameSessionService extends ApiEntityBaseService<IGameSession> {
  constructor(public override http: HttpClient) {
    super(http, environment.API_BASE_URL + '/gamesessions');
  }

  public override getItemKey(item: IGameSession): IdType {
    return item?.id || IdDefault;
  }

//@CustomCodeBegin
//@CustomCodeEnd
}
