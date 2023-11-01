import React from 'react'
import { useParams } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ProductDetails() {

    const params = useParams()
    console.log(params.productId)
    const index= params.productId


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
            </Container>
        </div>
    )
}

export default ProductDetails
