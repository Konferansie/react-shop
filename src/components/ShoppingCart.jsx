import React from 'react';

const ShoppingCart = ({quantity = 0, handleCartShow} ) => {


    return (
        <div className='cart blue darken-3 ' onClick={handleCartShow}>
            <i className='material-icons'>shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
};

export default ShoppingCart;