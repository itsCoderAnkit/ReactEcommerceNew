import React, { useContext } from 'react'

import { Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import styles from './AvailableProducts.module.css'
import CartContext from '../Store/CartContext'
import AuthContext from '../Store/AuthContext'


export default function AvailableProducts() {

  const cartCtx = useContext(CartContext)


  const productsArr = [

    {

      title: 'Colors',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {

      title: 'Black and white Colors',

      price: 50,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

      title: 'Blue Color',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

  ]
      const authCtx = useContext(AuthContext)
      console.log(authCtx)


  const addToCartHandler = (product,index) => {
    console.log("ADDING ITEM TO CART FROM AVAILABLE PRODUCTS", product,index)
    cartCtx.addItem({
      id:index,
      item: product.title,
      amount: 1,
      price: product.price,
    })
    let email = localStorage.getItem('email')
    let email1 = email.replaceAll('@', '')
    let email2 = email1.replaceAll('.', '')
    console.log(email2, product, JSON.stringify(product))
    fetch(`https://crudcrud.com/api/e76e94de77cd4ec89917196e01fb3e1a/${email2}`, {
      //mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
        //'charset': 'utf-8'
      }
    }).then(response => {
      console.log(response)

      if (response.ok) {
        console.log("add product crud crud response>>", response)
        return response.json()
      }
      else {
        return response.json().then((data) => {
          // let errorMessage='Authentication Failed'
          // throw new Error(errorMessage)
          console.log(data)
        })
      }
    }).then((data) => {
      console.log(data)

    })
      .catch((err) => {
        console.log(err)
        //alert(err.message)
      })
  }


  let products = productsArr.map((prod, index) => (
    <Container className={styles.container} key={index}>
    <Link to={`/productDetails/${index}`} className={styles.link}>
      <Col md={4} >
        <Card className={styles.Card} key={index}>
          <Card.Img variant="top" src={prod.imageUrl} />
          <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
            <Card.Text>
              {prod.price}
            </Card.Text>
              
          
          </Card.Body>
        </Card>
      </Col>
    </Link>
    <Button variant="primary" onClick={() => addToCartHandler(prod, index)}>Buy Now</Button>
    </Container>
  ))


  return (
    <div className={styles.products}>

      <h2 >Music</h2>
      <br></br>
      <Container>
        <div className={styles.div}>
          {products}
          </div>
      </Container>

    </div>
  )
}
