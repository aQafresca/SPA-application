import { CHAR } from '@/constants';
import { ICharacter } from '@/interface/characters';

interface IBuildOptions {
  showFull?: boolean;
}
export const buildCharacterDescription = (character: ICharacter, options?: IBuildOptions) => {
  const base = [
    { label: CHAR.STATUS, value: character.status },
    { label: CHAR.SPECIES, value: character.species },
    { label: CHAR.GENDER, value: character.gender },
  ];

  if (options?.showFull) {
    base.push(
      { label: CHAR.ORIGIN, value: character.origin.name },
      { label: CHAR.LOCATION, value: character.location.name },
    );
  }

  return base;
};
