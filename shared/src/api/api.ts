import { Image } from "../types/image";
import { Reservation } from "../types/reservation";
import { User, UserFormValues } from "../types/user";
import { GENERATED_IMAGES } from "../utils/generate-images";
import { GENERATED_RESERVATIONS } from "../utils/generate-reservations";
import { GENERATED_USERS } from "../utils/generate-users";

abstract class Api {
  public static async getReservations(): Promise<Reservation[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(GENERATED_RESERVATIONS);
      }, 1000);
    });
  }

  public static async getUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(GENERATED_USERS);
      }, 1000);
    });
  }

  public static async getImages(): Promise<Image[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(GENERATED_IMAGES);
      }, 1000);
    });
  }

  public static async signIn(_values: UserFormValues): Promise<void> {
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
