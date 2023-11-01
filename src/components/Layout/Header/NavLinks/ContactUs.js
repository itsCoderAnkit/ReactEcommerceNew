import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';


function ContactUs(props) {
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()

    const formSubmitHandler = (e) => {
        e.preventDefault()
        //console.log(nameRef.current.value,emailRef.current.value,phoneRef.current.value)
        const userDetails = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value
        }
        //console.log(userDetails)
        props.userDetails(userDetails)
    }
    return (
        <div>
            <h1>CONTACT US PAGE</h1>
            <Form onSubmit={formSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" ref={nameRef} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" ref={phoneRef} />

                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ContactUs
