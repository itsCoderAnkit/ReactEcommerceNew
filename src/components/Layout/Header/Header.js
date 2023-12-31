import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
import { NavLink } from 'react-router-dom';


export default function Header(props) {
  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark" className={styles.navbar}>
          <Container >
            <Navbar.Brand href="/home">My E-com Store</Navbar.Brand>
            
            <nav>
              <ul>
                <li>
                  <NavLink activeClassName={styles.active} to="/home">Home</NavLink>
                  {/* <NavLink className={(isActive,isPending)=>{
                    if(isPending=='pending'){
                      return 'pending'
                    }
                    else{
                      return 'active'
                    }
                  }} to="/">Home</NavLink> */}
                </li>
                <li>
                  <NavLink activeClassName={styles.active} to="/store">Store</NavLink>
                </li>
                <li>
                  <NavLink activeClassName={styles.active} to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink activeClassName={styles.active} to="/contact">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink activeClassName={styles.active} to="/auth-form">Login</NavLink>
                </li>
                <li>
                  <NavLink activeClassName={styles.active} to="/logout">Logout</NavLink>
                </li>
              </ul>
            </nav>

            <HeaderCartButton showCart={props.showCart}></HeaderCartButton>
            
          </Container>
        
        </Navbar>
      </header>
      <div className={styles.headerBackground}>

        <h1> THE GENERICS </h1>

      </div>
    </>
  )
}
