import React, {Component} from 'react';
import BeansDark from './Beans_logo_dark.svg'
import {Row, Col, Container} from 'reactstrap';
import {connect} from 'react-redux';
import WithService from '../hoc';
import {itemLoading, errorAppeared, loadedItems} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class CoffeeItem extends Component {
    state = {
        description: this.props.choose.description.slice(0, 200) + '...'
    }

    componentDidMount() {
        this.props.itemLoading();

        const {CoffeeService} = this.props;
        CoffeeService.getAllCoffee()
            .then(res => this.props.loadedItems(res, 'COFFEE_LOADED'))
            .catch(this.props.errorAppeared);
    }

    showFullDesc = () => {
        this.setState({description: this.props.choose.description})
    }

    render() {
        const {loading, error, idPage, coffee} = this.props;

        if (error) {
            return <Error/>
        }

        const choose = coffee.find(item => item.id === idPage)

        const MainBlock = () => {
            return (
                <Container className="container">
                    <Row className="rowitem">
                        <Col lg={{size: 5, offset: 1}}>
                            <img className="shop__girl_item" src={choose.url} alt="coffee_item"/>
                        </Col>
                        <Col lg={{size: 4}}>
                            <div className="title">About it</div>
                            <img className="beanslogo" src={BeansDark} alt="Beans logo"/>
                            <div className="shop__point">
                                <span>Country: </span>
                                {choose.country}
                            </div>
                            <div className="shop__point" onClick={this.showFullDesc}>
                                <span>Description: </span>
                                {this.state.description}
                            </div>
                            <div className="shop__point">
                                <span>Price: </span>
                                <span className="shop__point-price">{choose.price}$</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        }

        const isReady = (loading) ? <Spinner/> : <MainBlock/>

        return (
            <section className="shop">
                {isReady}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        choose: state.choose,
        error: state.error,
        loading: state.loading,
        coffee: state.coffee
    }
}

const mapDispatchToProps = {
    itemLoading,
    errorAppeared,
    loadedItems
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeItem));