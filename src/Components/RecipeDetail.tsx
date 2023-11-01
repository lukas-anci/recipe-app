import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Recipe } from '../Interface/IRecipe';

interface RecipeDetailProps {
  recipeData: Recipe[]; // Replace RecipeData with your actual data structure
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipeData }) => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipeData.find((r) => r.id === id);
  const localStorageKey = `selectedIngredients_${id}`;
  const storedIngredients = localStorage.getItem(`selectedIngredients_${id}`);
  const initialSelectedIngredients = storedIngredients
    ? JSON.parse(storedIngredients)
    : new Array(recipe?.ingredients.length).fill(false);
  const initialSelectedSauceIngredients = storedIngredients
    ? JSON.parse(storedIngredients)
    : new Array(recipe?.sauce?.length || 0).fill(false);

  const [selectedIngredients, setSelectedIngredients] = useState(
    initialSelectedIngredients
  );

  const [selectedSauceIngredients, setSelectedSauceIngredients] = useState(
    initialSelectedSauceIngredients
  );

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(selectedIngredients));
  }, [localStorageKey, selectedIngredients]);

  const handleCheckboxChange = (index: number, isSauceIngredient = false) => {
    if (isSauceIngredient) {
      const updatedSelectedSauceIngredients = [...selectedSauceIngredients];
      updatedSelectedSauceIngredients[index] =
        !updatedSelectedSauceIngredients[index];
      setSelectedSauceIngredients(updatedSelectedSauceIngredients);
    } else {
      const updatedSelectedIngredients = [...selectedIngredients];
      updatedSelectedIngredients[index] = !updatedSelectedIngredients[index];
      setSelectedIngredients(updatedSelectedIngredients);
    }
  };

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const handleClear = () => {
    localStorage.removeItem(localStorageKey);
    setSelectedIngredients(new Array(recipe?.ingredients.length).fill(false));
    setSelectedSauceIngredients(
      new Array(recipe?.sauce?.length || 0).fill(false)
    );
  };

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div
      className="card"
      style={{
        backgroundImage: 'url(/images/cardRecipe.avif)',
        backgroundPosition: 'center center',
      }}
    >
      <h2>{recipe.name}</h2>
      <img src={recipe?.imageUrl} alt={recipe.name} />
      <h3 className="mt-4 mb-4">Ingredients:</h3>
      <ul className="list-group text-start">
        {recipe.ingredients.map((ingredient, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
            onClick={() => handleCheckboxChange(index)}
          >
            {ingredient}
            <input
              type="checkbox"
              className="form-check-input"
              checked={selectedIngredients[index]}
              onChange={() => handleCheckboxChange(index)}
              style={{
                backgroundColor: selectedIngredients[index] ? 'gray' : 'white',
                border: '1px solid gray',
              }}
            />
          </li>
        ))}
      </ul>

      {recipe.sauce && (
        <>
          <h3 className="mt-4 mb-4">Sauce ingredients:</h3>
          <ul className="list-group text-start">
            {recipe.sauce.map((sauce, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
                onClick={() => handleCheckboxChange(index, true)}
              >
                {sauce}
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedSauceIngredients[index]}
                  onChange={() => handleCheckboxChange(index, true)}
                  style={{
                    backgroundColor: selectedSauceIngredients[index]
                      ? 'gray'
                      : 'white',
                    border: '1px solid gray',
                  }}
                />
              </li>
            ))}
          </ul>
        </>
      )}
      <button onClick={handleClear} className="btn btn-danger mt-4 mb-4">
        Clear
      </button>
      <h3>Instructions:</h3>
      <ol className="text-start">
        {recipe.instructions.map((instruction, index) => (
          <li className="fw-bold" key={index}>
            {instruction}
          </li>
        ))}
      </ol>
      <button
        onClick={goBack}
        type="button"
        style={{ backgroundColor: 'gray', border: '1px solid gray' }}
        className="btn btn-primary fw-bold"
      >
        Go Back
      </button>
    </div>
  );
};

export default RecipeDetail;
