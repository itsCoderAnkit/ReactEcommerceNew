import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from '../UI/Modal';
import CartContext from '../Store/CartContext';

export default function Cart(props) {

  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

  //    const cartElements = [{

  //     title: 'Colors',

  //     price: 100,

  //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

  //   },

  //   {

  //     title: 'Black and white Colors',

  //     price: 50,

  //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

  //   },

  //   {

  //     title: 'Yellow and Black Colors',

  //     price: 70,

  //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  //   },

  //   {

  //     title: 'Blue Color',

  //     price: 100,

  //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

  //   }
  // ]

  

        const tableData = cartCtx.items.map((item,index)=>(<tr><td>{index+1}</td><td>{item.title}</td><td>{item.price}</td><td>{item.quantity}</td></tr>))

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
      <tbody>
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
