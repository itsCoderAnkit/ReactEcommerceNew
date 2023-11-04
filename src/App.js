import React, { useContext, useState } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Layout/Header/Header';
import About from './components/Layout/Header/NavLinks/About';
import Home from './components/Layout/Header/NavLinks/Home';
import Cart from './components/Cart/Cart';
import Footer from './components/Layout/Footer/Footer';
import AvailableProducts from './components/Products/AvailableProducts';
import CartProvider from './components/Store/CartProvider';
import ContactUs from './components/Layout/Header/NavLinks/ContactUs';
import ProductDetails from './components/Layout/Header/NavLinks/ProductDetails';
import AuthForm from './components/Auth/AuthForm';
import AuthContext from './components/Store/AuthContext';
import Logout from './components/Auth/Logout';




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

  const authCtx = useContext(AuthContext)
  //console.log(authCtx)
  return (

    <CartProvider>

      {showCart && <Cart onClose={handleHideCart} />}
      <Header showCart={handleShowCart}></Header>
      <main>
        <Switch>
          <Route path='/home' exact >
            <Home />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/contact' exact>
            <ContactUs userDetails={storeUserDetails} />
          </Route>
          
          <Route path='/store' exact>
            {console.log(authCtx)}
            {authCtx.isLoggedIn && < AvailableProducts />}
            {!authCtx.isLoggedIn && < Redirect to="/auth-form" />}
            
          </Route>
          <Route path='/auth-form' exact>
            <AuthForm />
          </Route>
          <Route path='/logout' exact>
            <Logout />
          </Route>
          <Route path='/productDetails/:productId' exact>
            <ProductDetails />
          </Route>
          <Route path='*'>
            <Redirect to='/home' />
          </Route>
        </Switch>
      </main>
      <Footer></Footer>
    </CartProvider>
  );
}

export default App;