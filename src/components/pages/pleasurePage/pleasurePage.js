import React from 'react';
import Header from '../../header';
import {Container} from 'reactstrap';
import './pleasurePage.sass';
import Footer from '../../footer';
import OurGoods from '../../ourGoods';
import GoodItems from '../../goodItems/goodItems';

const PleasurePage = () => {
    return (
    <>
        <Container className='pleasure-banner'>
            <Header/>
            <h1 className="title-big">For your pleasure</h1>
        </Container>
        <section className="pleasure">
                <OurGoods/>
                <div className="line"></div>
                <GoodItems/>
        </section>
        <Footer/>
    </>
    )
}

export default PleasurePage;