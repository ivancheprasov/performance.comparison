import { Reservation } from "../types/reservation";
import { generateReservations } from "../utils/generate-reservations";

abstract class Api {
  public static async getReservations(): Promise<Reservation[]> {
    return new Promise((resolve) => {
      const reservations = generateReservations();
      setTimeout(() => {
        resolve(reservations);
      }, 1000);
    });
  }
}

export default Api;
