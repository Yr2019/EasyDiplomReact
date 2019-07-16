import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import WithService from '../hoc';
import CoffeeItemsItem from '../coffeeItemsItem';
import {loadedItems, itemLoading, errorAppeared} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import MainBlock from '../mainBlock';

class CoffeeItems extends Component {
    componentDidMount() {
        this.props.itemLoading();

        const {CoffeeService} = this.props;
        CoffeeService.getAllCoffee()
            .then(res => this.props.loadedItems(res, 'COFFEE_LOADED'))
            .catch(this.props.errorAppeared);
    }

    render() {
        const {loading, error, coffee, filter, search} = this.props;

        if (error) {
            return <Error/>
        }

        let visible = coffee.filter(item => {
           if (filter === 'all') {
               return item;
           } else {
               return item.country === filter;
           }
        });

        visible = visible.filter(item => {
            if (search === '') {
                return item;
            } else {
                return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
            }
        });

        const isReady = (loading) ? <Spinner/> : <MainBlock items={visible} Component={CoffeeItemsItem}/>
        return (
            <Row className="row">
                <Col lg={{size: 10, offset: 1}}>
                    <div className="shop__wrapper">
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
        coffee: state.coffee,
        filter: state.filter,
        search: state.search,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    loadedItems,
    itemLoading,
    errorAppeared
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(CoffeeItems));