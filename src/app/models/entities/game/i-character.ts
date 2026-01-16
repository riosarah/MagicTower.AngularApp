//@GeneratedCode
import { IVersionModel } from '@app-models/i-version-model';
import { CharacterClass } from '@app-enums/game/character-class';
import { IGameSession } from '@app-models/entities/game/i-game-session';
import { IWeapon } from '@app-models/entities/game/i-weapon';
//@CustomImportBegin
//@CustomImportEnd
export interface ICharacter extends IVersionModel {
  name: string;
  class:   CharacterClass;
  level: number;
  maxHealth: number;
  currentHealth: number;
  attackPower: number;
  specialAttackLevel: number;
  gold: number;
  gameSessions: IGameSession[];
  weapons: IWeapon[];
//@CustomCodeBegin
//@CustomCodeEnd
}
