import { Reservation } from "../types/reservation";
import { generateReservations } from "../utils/generate-reservations";
import { generateUsers } from "../utils/generate-users";
import { User, UserFormValues } from "../types/user";

abstract class Api {
  public static async getReservations(): Promise<Reservation[]> {
    return new Promise((resolve) => {
      const reservations = generateReservations();
      setTimeout(() => {
        resolve(reservations);
      }, 1000);
    });
  }

  public static async getUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      const users = generateUsers();
      setTimeout(() => {
        resolve(users);
      }, 1000);
    });
  }

  public static async signIn(values: UserFormValues): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  public static async signOut(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
}

export default Api;
