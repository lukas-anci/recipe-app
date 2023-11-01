import './App.css';
import '../src/scss/styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeCard from './Components/RecipeCard';
import RecipeDetail from './Components/RecipeDetail';
function App() {
  const recipeData = [
    // Replace this with your actual recipe data
    {
      id: '1',
      name: 'Plov',
      imageUrl: '/images/plovas.jpg',
      ingredients: [
        '500 g Beef',
        '1 onion',
        '2-3 carrots',
        '1/2 t.s. salt',
        '1/4 t.s. pepper',
        'lauro lapai',
        '1 t.s. garlic powder',
        '1 t.s. paprika',
        '1/2 t.s. kumin',
        '700 ml beef broth',
        '2 t.s. tomato paste',
        '350 g rice',
        '1 garlic head',
        'fresh parsley',
      ],
      instructions: [
        'Cut beef in small cubic pieces',
        'Cut onion and carrot into small cubic pieces',
        'Heat the oil in the pan, cook onions for few minutes',
        'Add carrots, cook for few minutes',
        'Cook beef but not until it gets roasted',
        'Mix all the spices and put into the pot',
        'Add the broth, lauro lapai and mix everything',
        'Cook on low heat for 2-3 hours',
        'Clean the rice and add to the pot for 20-30 minutes',
        'Add the cut garlic head',
        'Serve with fresh parsley',
      ],
    },
    {
      id: '2',
      name: 'Chicken noodles',
      imageUrl: '/images/stir-fry.jpg',
      ingredients: [
        '200g noodles',
        'oil to fry',
        '400 g of chicken',
        '3 garlic cloves',
        '1 red paprika',
        ' 200 g beans or brocolli',
        '100 g shiitake mushrooms',
        'sezame seeds',
      ],
      sauce: [
        '4 spoons soy sauce',
        '2 spoons oyster sauce',
        '2 spoons sweet chilli sauce',
        '2 spoons water',
        '1 spoon sugar or honey',
        '1 spoon rice vinegar',
        '1 spoon sezame oil',
      ],
      instructions: [
        'Cook the noodles as instructed',
        'Mix everything in a bowl for the sauce',
        'Preheat the oven and cook the chicken',
        'Add garlic, ginger and cook for a minute',
        'Add the cooked noodles and mix it',
        'Serve with sezame seeds',
      ],
    },
  ];

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
