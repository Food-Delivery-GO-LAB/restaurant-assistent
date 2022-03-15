export type DishStatus = 'available' | 'unavailable';

export interface Dish {
  cost: number;
  description: string;
  id: string;
  image: string;
  name: string;
  status: DishStatus;
  type: string;
  weight: number;
}

export interface UpdatedDish {
  cookingTime: number;
  cost: number;
  description: string;
  image: string;
  name: string;
  status: string;
  type: string;
  weight: number;
}

export interface NewDish extends UpdatedDish {
  restaurantId: string;
}
