import { SexType } from "@faker-js/faker";

export interface User {
  id: string;
  name: string;
  sex: SexType;
  avatarVersion: number;
  job: string;
}

export interface UserFormValues {
  firstName: string;
  lastName: string;
  password: string;
}
