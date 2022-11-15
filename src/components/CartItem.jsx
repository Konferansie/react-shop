import React from 'react';

const CartItem = (
    {
        id,
        name,
        price,
        quantity,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    }) => {
    return (
        <li className='collection-item'>
            Name:{name} ({price})
            <i onClick={() => decreaseQuantity(id)} className='material-icons cart-qty'>remove</i>
            {quantity}
            <i onClick={() => increaseQuantity(id)} className='material-icons cart-qty'>add</i>
            = {price * quantity}
            <span className="secondary-content">
                <i className="material-icons" onClick={() => removeFromCart(id)}>close</i>
            </span>
        </li>
    );
};

export default CartItem;