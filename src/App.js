import './App.css';
import Header from './Components/Layout/Header/Header';
import {Fragment} from 'react'
import MealList from './Components/Meals/MealsList/MealList';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <MealList />
      </main>
    </Fragment>
	
  );
}

export default App;