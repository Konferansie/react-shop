import React, {useEffect} from 'react';

const Alert = ({name = '', closeAlert}) => {
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

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