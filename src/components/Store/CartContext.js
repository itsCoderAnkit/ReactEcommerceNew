import React from 'react'

const CartContext = React.createContext({  // these are initial dafault values
    items:[],  
    totalAmount:0,
    addItem:(()=>{}),
    removeItem:(()=>{})
})

export default CartContext