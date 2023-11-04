import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from '../UI/Modal';
import CartContext from '../Store/CartContext';

export default function Cart(props) {

  const cartCtx = useContext(CartContext)
  const totalAmount = ` INR ${cartCtx.totalAmount.toFixed(2)}`

  let email = localStorage.getItem('email')
  let email1 = email.replaceAll('@', '')
  let email2 = email1.replaceAll('.', '')
  console.log("crud crud get >>", email2)
  fetch(`https://crudcrud.com/api/e76e94de77cd4ec89917196e01fb3e1a/${email2}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(response => {
    console.log("get crud crud", response)

    if (response.ok) {
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
    console.log("get crud crud data",data)

  })
    .catch((err) => {
      console.log(err)
      //alert(err.message)
    })

  const tableData = cartCtx.items.map((item, index) => (<tr key={index}><td>{index + 1}</td><td>{item.item}</td><td>{item.price}</td><td>{item.amount}</td></tr>))

  return (
    <Modal onClose={props.onClose}>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody >
          {tableData}

        </tbody>
      </Table>
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button onClick={props.onClose}> Close </button>
      </div>
    </Modal>
  )
}
