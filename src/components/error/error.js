import React from 'react';
import errorSign from './error.png';
import './error.sass';

const Error = () => {
    return (
        <div className="error__container">
            <div>
                <img className="error__img" src={errorSign} alt='error'/>
            </div>
            <h1>Error! Something goes wrong!</h1>
        </div>
        
    )
}

export default Error;