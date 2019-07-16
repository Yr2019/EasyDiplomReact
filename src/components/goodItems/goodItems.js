import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {loadedItems, itemLoading, errorAppeared} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import {connect} from 'react-redux';
import WithService from '../hoc';
import GoodItem from '../goodItem';
import MainBlock from '../mainBlock';

class GoodItems extends Component {
    componentDidMount() {
        this.props.itemLoading();

        const {CoffeeService} = this.props;
        CoffeeService.getGoods()
            .then(res => this.props.loadedItems(res, 'GOODS_LOADED'))
            .catch(this.props.errorAppeared);
    }

    render() {
        const {loading, error, goods} = this.props;

        if (error) {
            return <Error/>
        }
    
        const isReady = (loading) ? <Spinner/> : <MainBlock items={goods} Component={GoodItem}/>
    
        return (
        <Row className="row">
            <Col lg={{size: 10, offset: 1}}>
                <div className="pleasure__wrapper">
                {
                    isReady
                }
                </div>
            </Col>
        </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    loadedItems,
    itemLoading,
    errorAppeared
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(GoodItems));