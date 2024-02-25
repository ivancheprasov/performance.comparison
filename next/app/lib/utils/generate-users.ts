import { faker, Sex } from '@faker-js/faker';
import { DEFAULT_DATA_COUNT, SEED_NUMBER } from '../constants/faker';
import { User } from '../types/user';

faker.seed(SEED_NUMBER);

export function generateUsers(length = DEFAULT_DATA_COUNT): User[] {
  function getPersonInfo() {
    const sex = faker.person.sexType();
    const avatarVersion = faker.number.int({
      min: sex === Sex.Female ? 0 : 2,
      max: sex === Sex.Female ? 1 : 3,
    });

    return {
      sex,
      avatarVersion,
      name: faker.person.fullName({ sex }),
      job: faker.person.jobType(),
    };
  }

  return Array.from({ length }, () => ({
    id: faker.string.uuid(),
    ...getPersonInfo(),
  }));
}
