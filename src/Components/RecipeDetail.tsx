import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Recipe } from '../Interface/IRecipe';

interface RecipeDetailProps {
  recipeData: Recipe[]; // Replace RecipeData with your actual data structure
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipeData }) => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipeData.find((r) => r.id === id);

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <h1>{recipe.name}</h1>
      <img src={recipe?.imageUrl} alt={recipe.name} />
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default RecipeDetail;
