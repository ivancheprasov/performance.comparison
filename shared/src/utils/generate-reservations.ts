import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { BIG_NUMBER_RANGE, SMALL_NUMBER_RANGE, DEFAULT_DATA_COUNT, SEED_NUMBER } from '../constants/faker';
import { SERVER_STANDARD_DATE } from "../constants/table";
import { Reservation } from "../types/reservation";

faker.seed(SEED_NUMBER);

export function generateReservations (length = DEFAULT_DATA_COUNT): Reservation[] {
  function getStatus () {
    const myReservations = 'My ReservationTable';
    const otherReservations = 'Other ReservationTable';
    const status = faker.helpers.arrayElement([myReservations, otherReservations]);
    return {
      status,
      ...(status === myReservations && {
        guestName: faker.person.fullName(),
        confirmationNumber: faker.number.int(BIG_NUMBER_RANGE),
      }),
    };
  }

  return Array.from({ length }, () => ({
    id: faker.string.uuid(),
    propertyId: faker.number.int(SMALL_NUMBER_RANGE),
    arrival: dayjs(faker.date.recent()).format(SERVER_STANDARD_DATE),
    departure: dayjs(faker.date.recent()).format(SERVER_STANDARD_DATE),
    nights: faker.number.int(SMALL_NUMBER_RANGE),
    ...getStatus(),
  }));
}
