import React from 'react';
import logo from './Beans_logo.svg';
import './mainpage.sass';
import {Row, Col, Container} from 'reactstrap';
import Header from '../../header';
import {Link} from 'react-router-dom';
import OurBest from '../../ourBest/ourBest';
import OurInfo from '../../ourInfo';
import Footer from '../../footer';

const MainPage = () => {
    return (
        <>
            <Container className='preview'>
                <Header/>
                <Row className="row">
                        <Col lg={{size: 10, offset: 1}}>
                            <h1 className="title-big">Everything You Love About Coffee</h1>
                            <img className="beanslogo" src={logo} alt="Beans logo"/>
                            <div className="preview__subtitle">We makes every day full of energy and taste</div>
                            <div className="preview__subtitle">Want to try our beans?</div>
                            <Link to="/coffee" className="preview__btn">More</Link>
                        </Col>
                </Row>
            </Container>
            <OurInfo/>
            <OurBest/>
            <Footer/>
        </>
    )
}

export default MainPage;