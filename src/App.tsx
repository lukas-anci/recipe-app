import './App.css';
import '../src/scss/styles.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import RecipeCard from './Components/RecipeCard';
import RecipeDetail from './Components/RecipeDetail';
import { recipeData } from './recipeData';
import { useState, useEffect } from 'react';
import { Recipe } from './Interface/IRecipe';
import SearchBar from './Components/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState<Recipe[]>(recipeData);

  const history = useHistory();

  useEffect(() => {
    console.log(history);
  });

  const handleSearch = (searchTerm: string) => {
    const results = recipeData.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <SearchBar onSearch={handleSearch} />
            <div className="row justify-content-center justify-content-md-center text-center">
              {searchResults.map((recipe) => (
                <div key={recipe.id} className="col-md-4 mb-4">
                  <RecipeCard
                    id={recipe.id}
                    name={recipe.name}
                    imageUrl={recipe.imageUrl}
                  />
                </div>
              ))}
            </div>
          </Route>
          <Route path="/recipe/:id">
            <RecipeDetail recipeData={recipeData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
