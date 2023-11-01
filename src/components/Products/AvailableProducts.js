import React, { useContext } from 'react'

import { Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import styles from './AvailableProducts.module.css'
import CartContext from '../Store/CartContext'

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

  const addToCartHandler = (product) => {
    console.log("ADDING ITEM TO CART FROM AVAILABLE PRODUCTS", product)
    cartCtx.addItem({
      item: product.title,
      amount: 1,
      price: product.price,

    })
  }

  let products = productsArr.map((prod, index) => (
    <Link to={`/productDetails/${index}`}>
      <Col md={4}>
        <Card className={styles.Card}>
          <Card.Img variant="top" src={prod.imageUrl} />
          <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
            <Card.Text>
              {prod.price}
            </Card.Text>
            <Button variant="primary" onClick={() => addToCartHandler(prod)}>Buy Now</Button>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  ))

  return (
    <div className={styles.products}>

      <h2>Music</h2>
      <br></br>
      <Container>

        <div>{products}</div>
      </Container>


    </div>
  )
}
