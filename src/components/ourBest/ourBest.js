import React, {Component} from 'react';
import {Row, Col, Container} from 'reactstrap';
import {connect} from 'react-redux';
import WithService from '../hoc';
import OurBestItem from '../ourBestItem';
import {loadedItems, itemLoading, errorAppeared} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import MainBlock from '../mainBlock';

class OurBest extends Component {

    componentDidMount() {
        this.props.itemLoading();

        const {CoffeeService} = this.props;
        CoffeeService.getBestsellers()
            .then(res => this.props.loadedItems(res, 'BEST_COFFEE_LOADED'))
            .catch(this.props.errorAppeared);

        CoffeeService.getAllCoffee()
            .then(res => this.props.loadedItems(res, 'COFFEE_LOADED'))
            .catch(this.props.errorAppeared);
    }

    render() {
        const {loading, error, bestsellers} = this.props;

        if (error) {
            return <Error/>
        }

        const isReady = (loading) ? <Spinner/> : <MainBlock items={bestsellers} Component={OurBestItem}/>

        return (
            <section className="best">
                <Container className="container">
                    <div className="title">Our best</div>
                    <Row>
                        <Col lg={{size: 10, offset: 1}}>
                            <div className="best__wrapper">
                                {
                                    isReady
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bestsellers: state.bestsellers,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    loadedItems,
    itemLoading,
    errorAppeared
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(OurBest));