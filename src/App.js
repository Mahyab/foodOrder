
import React, {useState} from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import './App.css';
import CardProvider from "./store/CardProvider";
import Meals from "./components/Meals/Meals";
function App() {
  const [cartIsShown , setCartIsShown] = useState(false);
  const showCarthandler = () =>{
    setCartIsShown(true);
  }
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
  return (
    <div className="App">
    <CardProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCarthandler}/>
        <main>
          <Meals/>
        </main>
    </CardProvider>
    </div>
   
  );
}

export default App;
