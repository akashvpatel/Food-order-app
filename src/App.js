import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import AvaliableMeals from './components/Meals/AvaliableMeals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Footer from './components/Footer/Footer';



function App() {
  const [CartAmount, setCartAmount] = useState(false)

  const ShowCartAmount = () => {
    setCartAmount(true)
  }


  const HideCartAmount = () => {
    setCartAmount(false)
  }
  return (
    <CartProvider>
      {CartAmount && <Cart onClose={HideCartAmount} />} 
      <Header onShow={ShowCartAmount} />
      <main>
        <Meals />
        <AvaliableMeals />
      </main>
      <Footer/>
    </CartProvider>
  )
}

export default App;
