import { faker } from '@faker-js/faker';
import { SEED_NUMBER, SMALL_DATA_COUNT } from '../constants/faker';
import { IMAGE_HEIGHT, IMAGE_WIDTH } from '../constants/image';
import type { Image } from '../types/image';

faker.seed(SEED_NUMBER);

export function generateImages(length = SMALL_DATA_COUNT): Image[] {
  return Array.from({ length }, () => ({
    id: faker.string.uuid(),
    url: faker.image.urlLoremFlickr({ width: IMAGE_WIDTH, height: IMAGE_HEIGHT, category: 'nature' }),
  }));
}
