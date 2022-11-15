import React from 'react';
import GoodsItem from "./GoodsItem";

const GoodsList = ({goods = [], addToCart}) => {


    if (!goods.length) {
        return <h3>List of Goods is Empty</h3>
    }

    return (
        <div className='goods'>
            {goods.map(item => (
                 <GoodsItem
                     key={item.id}
                     {...item}
                     addToCart ={addToCart}/>
                ))}
        </div>
    );
};

export default GoodsList;