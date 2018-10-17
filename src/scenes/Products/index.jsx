import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { connect } from "react-redux";
import { setProducts, setCategoryFilter } from 'redux/actions';
import { getProducts, getProductsByCategory } from 'redux/selectors';

import Page from 'components/Page';
import ItemList from 'components/ItemList';

import fakeData from 'fakeData';

const HeadingText = styled.div`
    padding: 20px 0;
`;

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        };

        if (this.props.match.params !== undefined) {
            this.props.setCategoryFilter(this.props.match.params.category);
        }
        
        this.props.setProducts(fakeData.products);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.products !== undefined) {
            this.setState({
                products: nextProps.products,
            });
        }
    }

    render() {
        return (
            <Page>
                <HeadingText>
                    Found {this.state.products.length} products to look at!
                </HeadingText>
                <div>
                    <ItemList 
                        items={this.state.products}
                    />
                </div>
            </Page>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { filters } = state;
console.log('state', state);
console.log();
    const products = filters.category !== null && filters.category !== undefined
        ? getProductsByCategory(state, filters.category)
        : [...state.products];
console.log('products after mapping state',products);
    return { filters, products }; 
}

export default connect(
    // First parameter of connect is 'mapStateToProps'
    mapStateToProps,
    // null,
    // Second parameter is 'mapDispatchToProps', where you are
    // adding actions to this.props that will interact directly 
    // with the store. this.props.sampleAction({ id, content })
    // will execute the action in src/redux/actions.js
    // dispatching that event to Redux
    {
        setProducts,
        setCategoryFilter,
    }
    // Third, optional param
    // mergeProps = function()
    // Fourth, optional param
    // options = Object()
)(Product);