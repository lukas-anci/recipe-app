export interface Recipe {
  id: string;
  name: string;
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
  //TODO: Make category as a interface
  category: string;
  sauce?: string[];
}
