import { Reservation } from "../types/reservation";
import { User, UserFormValues } from "../types/user";
import { generateReservations } from "../utils/generate-reservations";
import { generateUsers } from "../utils/generate-users";
import { generateImages } from "../utils/generate-images";
import { Image } from "../types/image";

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

  public static async getImages(): Promise<Image[]> {
    return new Promise((resolve) => {
      const images = generateImages();
      setTimeout(() => {
        resolve(images);
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
