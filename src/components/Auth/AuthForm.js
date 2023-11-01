import React, { useContext, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap'
import AuthContext from '../Store/AuthContext'
import styles from './AuthForm.module.css'

function AuthForm() {

    const history = useHistory()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const authCtx = useContext(AuthContext)

    const [isLogin,setIsLogin] = useState(true)
    
    const submitHandler= (event)=>{
        event.preventDefault()

        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value
        
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFVZI2YLQ89hEI8qshiyk8rACWica88r0',{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(response=>{
            if(response.ok){
                return response.json()
            }
            else{
                return response.json().then((data)=>{
                    let errorMessage='Authentication Failed'
                    throw new Error(errorMessage)
                })
            }
        }).then((data)=>{
            authCtx.login(data.idToken)
            history.replace('/')
        })
        .catch((err)=>{
            alert(err.message)
        })
        
    
    }

  return (
    <div>

        <Container className={styles.Container}>
            <h1> Login Form </h1>
     <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordInputRef}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default AuthForm
