import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCardHandle = () => {
    setCartIsShown(true);
  };
  const hideCardHandle = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCardHandle} />}
      <Header onShowCart={showCardHandle} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
