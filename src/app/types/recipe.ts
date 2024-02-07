export interface Recipe {
  id?: number;
  name: string;
  image: string;
  mealType: string;
  rating: number;
  caloriesPerServing: number;
  cuisine: string;
  difficulty: string;
  instructions: Array<any>;
  ingredients: Array<any>;
}
