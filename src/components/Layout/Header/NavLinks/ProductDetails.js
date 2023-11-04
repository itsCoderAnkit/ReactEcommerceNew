import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import CartContext from '../../../Store/CartContext';

function ProductDetails() {

    const params = useParams()
    console.log(params.productId)
    const index= params.productId

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

    return (
        <div>
            <h1>PRODUCT DETAILS</h1>
            <Container>
                <h2>{productsArr[index].title}</h2>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={productsArr[index].imageUrl} thumbnail />
                    </Col>
                </Row>
                <h3>INR {productsArr[index].price}</h3>
                <Button variant="primary"  onClick={() => addToCartHandler(productsArr[index], index)}>Buy Now</Button>
            </Container>
        </div>
    )
}

export default ProductDetails