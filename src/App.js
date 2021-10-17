import './App.css';
import Header from './Components/Layout/Header/Header';
import MealList from './Components/Meals/MealsList/MealList';
import Cart from './Components/Cart/Cart.js';
import { useSelector }  from 'react-redux';
import { Fragment } from 'react';

function App() {
  const cartIsShown = useSelector(state => state.cartIsShown)

  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <MealList />
      </main>
    </ Fragment>
  );
}

export default App;