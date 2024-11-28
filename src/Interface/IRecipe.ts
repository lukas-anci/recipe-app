export interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
  category: string;
  sauce?: string[];
}
