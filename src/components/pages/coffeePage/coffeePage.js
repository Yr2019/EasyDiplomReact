import React from 'react';
import Header from '../../header';
import {Container} from 'reactstrap';
import './coffeepage.sass';
import OurShop from '../../ourShop';
import Footer from '../../footer';
import Search from '../../search';
import CoffeeItems from '../../coffeeItems';
import Filter from '../../filter';

const CoffeePage = () => {
    return (
        <>
            <Container className='banner'>
                <Header/>
                <h1 className="title-big">Our coffee</h1>
            </Container>
            <section className="shop">
                <OurShop/>
                <div className="line"></div>
                <Search/>
                <Filter/>
                <CoffeeItems/>
            </section>
            <Footer/>
        </>
    )
}

export default CoffeePage;