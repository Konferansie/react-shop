import React, {createContext, useReducer} from "react";
import {reducer} from './reducer'


export const ShopContext = createContext(reducer);

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isCartShow: false,
    alertName: '',
}


export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.setGoods = (data) => {
        dispatch({type:'SET_GOODS', payload:data})
    }

    value.handleCartShow = () => {
        dispatch({type: 'TOGGLE_CART'})
    }

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }
    value.addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
    }

    value.removeFromCart = (itemId) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: {id: itemId}})
    }

    value.increaseQuantity = (itemId) => {
        dispatch({type: 'INC_QUANTITY', payload: {id: itemId}})
    }

    value.decreaseQuantity = (itemId) => {
        dispatch({type: 'DEC_QUANTITY', payload: {id: itemId}})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}
