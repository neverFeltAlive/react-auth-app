import { faker } from '@faker-js/faker';

import { User } from './types';

function generateRandomData(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    favouriteMusic: faker.music.genre(),
    favouriteSong: faker.music.songName(),
    sex: faker.person.sex(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const GENERATED_DATA = faker.helpers.multiple(generateRandomData, {
  count: 100,
});
