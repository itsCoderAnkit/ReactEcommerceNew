import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Layout/Header/Header';
import About from './components/Layout/Header/NavLinks/About';
import Home from './components/Layout/Header/NavLinks/Home';
import Cart from './components/Cart/Cart';
import Footer from './components/Layout/Footer/Footer';
import AvailableProducts from './components/Products/AvailableProducts';
import CartProvider from './components/Store/CartProvider';
import ContactUs from './components/Layout/Header/NavLinks/ContactUs';




function App() {

  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => {
    console.log("handle  Showcart app.js")
    setShowCart(true)
  }

  const handleHideCart = () => {
    console.log("handle  HideCart app.js")
    setShowCart(false)
  }

  const storeUserDetails = async (data) => {
    console.log(data)
    const response = await fetch('https://myecomstore-8daa5-default-rtdb.firebaseio.com/users.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
        header: {
          'Content-Type': 'application.json'
        }
      })
    const responseData = await response.json()
    console.log(responseData)
  }

  return (

    <CartProvider>

      {showCart && <Cart onClose={handleHideCart} />}
      <Header showCart={handleShowCart}></Header>
      <main>
        <Switch>
          <Route path='/' exact >
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/contact' exact>
            <ContactUs userDetails={storeUserDetails} />
          </Route>
          <Route path='/store' exact>
            <AvailableProducts />
          </Route>
        </Switch>
      </main>
      <Footer></Footer>
    </CartProvider>
  );
}

export default App;
