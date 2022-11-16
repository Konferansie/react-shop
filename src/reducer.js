export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            }
        case 'TOGGLE_CART':
            return {
                ...state,
                isCartShow: !state.isCartShow
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        case 'ADD_TO_CART':
            const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id);
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                }
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem;
                    }
                })
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.name
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id)
            }
        case 'INC_QUANTITY':
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === payload.id) {
                        const newQuantity = item.quantity + 1;
                        return {
                            ...item,
                            quantity: newQuantity
                        }
                    } else {
                        return item
                    }
                })
            }
        case 'DEC_QUANTITY':
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === payload.id) {
                        const newQuantity = item.quantity - 1;
                        return {
                            ...item,
                            quantity: newQuantity >= 0 ? newQuantity : 0
                        }
                    } else {
                        return item
                    }
                })
            }
        default:
            return state
    }
}