export interface Dish {
  cost: number;
  description: string;
  id: string;
  image: string;
  name: string;
  status: boolean;
  type: string;
  weight: number;
}

export interface UpdatedDish {
  cookingTime: number;
  cost: number;
  description: string;
  image: string;
  name: string;
  status: boolean;
  type: string;
  weight: number;
}
