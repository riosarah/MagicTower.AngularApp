//@GeneratedCode
import { IVersionModel } from '@app-models/i-version-model';
import { IGameSession } from '@app-models/entities/game/i-game-session';
//@CustomImportBegin
//@CustomImportEnd
export interface IDefeatedEnemy extends IVersionModel {
  gameSessionId: number;
  floorNumber: number;
  isBoss: boolean;
  enemyType: string;
  enemyRace: string;
  enemyLevel: number;
  enemyWeapon: string;
  goldReward: number;
  defeatedAt: Date;
  gameSession: IGameSession | null;
//@CustomCodeBegin
//@CustomCodeEnd
}
