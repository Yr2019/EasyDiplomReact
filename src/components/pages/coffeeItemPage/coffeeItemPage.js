import React from 'react';
import Header from '../../header';
import {Container} from 'reactstrap';
import Footer from '../../footer';
import CoffeeItem from '../../coffeeItem';
import {connect} from 'react-redux';

const CoffeeItemPage = ({idPage}) => {
    return (
        <>
            <Container className='banner'>
                <Header/>
                <h1 className="title-big">Your coffee</h1>
            </Container>
            <CoffeeItem idPage={idPage}/>
            <Footer/>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        idPage: ownProps.match.params.id
    }
}

export default connect(mapStateToProps)(CoffeeItemPage);