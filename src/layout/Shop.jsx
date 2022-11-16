import React, {useEffect, useContext} from 'react';
import {API_URL, API_KEY} from "../config";
import {ShopContext} from "../context";

import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import ShoppingCart from "../components/ShoppingCart";
import CartList from "../components/CartList";
import Alert from "../components/Alert";

const Shop = () => {
    const {loading, order, setGoods, isCartShow, alertName} = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        })
            .then(response => response.json())
            .then((data) => {
                setGoods(data.featured);
            })
        // eslint-disable-next-line
    }, [])

    return (
        <div className={'container content'}>
            <ShoppingCart quantity={order.length}/>

            {loading ? <Preloader/> : <GoodsList/>}

            {isCartShow && (<CartList/>)}

            {alertName && <Alert/>}
        </div>
    );
};
export default Shop;