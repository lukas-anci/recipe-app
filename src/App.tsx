import './App.css';
import '../src/scss/styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeCard from './Components/RecipeCard';
import RecipeDetail from './Components/RecipeDetail';
import { recipeData } from './recipeData';
function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <div className="row justify-content-center justify-content-md-center text-center">
              {recipeData.map((recipe) => (
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
