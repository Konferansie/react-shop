import React, {useContext} from 'react';
import {ShopContext} from "../context";
import CartItem from "./CartItem";


const CartList = () => {

    const {
        order = [],
        handleCartShow,
    } = useContext(ShopContext)

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)
    const totalQuantity = order.reduce((quantity, el) => {
        return quantity + el.quantity
    }, 0)

    return (

        <ul className="collection cart-list">
            <li className="collection-item active cart-heading">Cart
                <i
                    className="material-icons"
                    onClick={handleCartShow}
                >close</i>
            </li>
            {
                order.length ? order.map(item => {
                    return <CartItem
                        key={item.id}
                        {...item}
                    />
                }) : (
                    <li className='collection-item'>Cart is Empty :(</li>
                )
            }
            <li className="collection-item active">Total Price: {totalPrice} ({totalQuantity} pcs.)</li>
            <li className="collection-item checkout ">
                <button className='btn btn-small'>Checkout</button>
            </li>
        </ul>

    );
};

export default CartList;