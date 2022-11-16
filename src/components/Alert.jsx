import React, {useEffect, useContext} from 'react';
import {ShopContext} from "../context";

const Alert = () => {
    const {alertName: name = '', closeAlert} = useContext(ShopContext)

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 31000);

        return () => {
            clearInterval(timerId)
        }
        // eslint-disable-next-line
    }, [name])

    return (
        <div id='toast-container'>
            <div className="toast">{name} added to Cart</div>
        </div>
    );
};

export default Alert;