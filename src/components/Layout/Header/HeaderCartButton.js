import React,{useContext} from 'react'
import styles from './HeaderCartButton.module.css'
import CartContext from '../../Store/CartContext'

export default function HeaderCartButton(props) {

    const cartCtx = useContext(CartContext)
console.log("cartCtx from header cart buttons", cartCtx )
const {items} = cartCtx

const numberOfCartItems = items.reduce((curNumber,item)=>{
     return curNumber + item.amount
},0)

    return (
        <div>
            <span>
                <button className={styles.CartButton} onClick={props.showCart}>Cart</button>
            </span>
            <span>{numberOfCartItems}</span>
        </div>
    )
}
