import React, {useEffect, useState} from 'react';
import {API_URL, API_KEY} from "../config";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import ShoppingCart from "../components/ShoppingCart";
import CartList from "../components/CartList";
import Alert from "../components/Alert";

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([])
    const [isCartShow, setIsCartShow] = useState(false)
    const [alertName, setAlertName] = useState('')

    const handleCartShow = () => {
        setIsCartShow(!isCartShow)
    }
    const addToCart = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder)
        }
        setAlertName(item.name)
    }

    const increaseQuantity = (itemId) => {
        const newOrder = order.map(item => {
            if (item.id === itemId) {
                const newQuantity = item.quantity + 1;
                return {
                    ...item,
                    quantity: newQuantity
                }
            } else {
                return item
            }
        })
        setOrder(newOrder)
    }

    const decreaseQuantity = (itemId) => {
        const newOrder = order.map(item => {
            if (item.id === itemId) {
                const newQuantity = item.quantity - 1;
                return {
                    ...item,
                    quantity: newQuantity >= 0 ? newQuantity : 0

                }

            } else {
                return item
            }

        })

        setOrder(newOrder)
    }

    const removeFromCart = (id) => {
        const newOrder = order.filter(item => item.id !== id);
        setOrder(newOrder);
    }

    const closeAlert = () => {
        setAlertName('')
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        })
            .then(response => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            })
    }, [])

    return (
        <div className={'container content'}>
            <ShoppingCart quantity={order.length} handleCartShow={handleCartShow}/>
            {loading ? <Preloader/> : <GoodsList
                goods={goods}
                addToCart={addToCart}

            />}

            {isCartShow && <CartList
                order={order}
                handleCartShow={handleCartShow}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
            />}

            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </div>
    );
};
export default Shop;