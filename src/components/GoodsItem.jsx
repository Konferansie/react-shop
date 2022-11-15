import React from 'react';

const GoodsItem = (props) => {

    const {
        id,
        name,
        description,
        price,
        full_background,
        addToCart
    } = props;

    return (
        <div className="card" key={id} id={id}>
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className='card-title'>
                    {name}
                </span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className='btn' onClick={() => addToCart({id, name, price})}>Buy</button>
                <span className="" style={{fontSize:'1.8rem'}}>{price}</span>
            </div>
        </div>
    );
};

export default GoodsItem;