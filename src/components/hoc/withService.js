import React from 'react';
import CoffeeContext from '../coffeeContext';

const WithService = () => (Wrapped) => {
    return (props) => {
        return (
            <CoffeeContext.Consumer>
                {
                    (CoffeeService) => {
                        return <Wrapped {...props} CoffeeService={CoffeeService}/>
                    }
                }
            </CoffeeContext.Consumer>
        )
    }
}

export default WithService;