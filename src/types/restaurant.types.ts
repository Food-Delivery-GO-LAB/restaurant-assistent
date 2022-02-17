export interface IRestaurant {
  adminName: string;
  adminEmail: string;
  adminNumber: number;
  adminPassword: string;
  description: string;
  title: string;
  category: string | string[];
  timeFrom: string;
  timeTo: string;
  location: string;
  number: number;
  logo: string;
  email: string;
}

export interface RestaurantSchema {
  adminName: string;
  adminEmail: string;
  adminNumber: number;
  adminPassword: string;
  description: string;
  title: string;
  timeFrom: string;
  timeTo: string;
  location: string;
  number: number;
  logo: string;
  email: string;
}
