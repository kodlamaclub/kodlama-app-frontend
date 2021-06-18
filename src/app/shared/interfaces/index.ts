export interface IUser {
  defaultAddress: string;
  _id?: string;
  name: string;
  surname: string;
  phone: number;
  email: string;
  role: RoleTypes;
  createdAt?: number;
  updatedAt?: number;
}

export enum RoleTypes {
  ADMIN = 20,
  MOD = 10,
  USER = 0
}

export enum DaysEnum {
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7
}
