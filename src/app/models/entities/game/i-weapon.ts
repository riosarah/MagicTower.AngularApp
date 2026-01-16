//@GeneratedCode
import { IVersionModel } from '@app-models/i-version-model';
import { CharacterClass } from '@app-enums/game/character-class';
import { ICharacter } from '@app-models/entities/game/i-character';
//@CustomImportBegin
//@CustomImportEnd
export interface IWeapon extends IVersionModel {
  characterId: number;
  name: string;
  type: string;
  damageBonus: number;
  upgradeLevel: number;
  suitableForClass:   CharacterClass;
  isEquipped: boolean;
  sellValue: number;
  upgradeCost: number;
  character: ICharacter | null;
//@CustomCodeBegin
//@CustomCodeEnd
}
