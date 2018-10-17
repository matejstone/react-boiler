import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Page from 'components/Page';
import { RowItem } from 'components/Item';

import fakeData from 'fakeData';

const BackToCategory = styled.div`
    margin: 10px 0;

    a {
        border: 1px solid #000;
        padding: 5px;
    }
`;

export default class ProductView extends Component {
    constructor(props) {
        super(props);

        const item = fakeData.products.filter(i => i.id == this.props.match.params.productid)[0];

        this.state = {
            item,
        };

        // this.setItem = this.setItem.bind(this);
    }

    // setItem({ id, name, price, category, description }) {
    //     const item = {
    //         id,
    //         name,
    //         price,
    //         category,
    //         description,
    //         category: fakeData.categories.map(cat => cat.id == category),
    //     };

    //     this.setState({ item });
    // }

    render() {
        if (this.state.item === undefined) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <Page>
                <BackToCategory>
                    <Link
                        to={`/products/${this.state.item.category}`}
                    >
                        Back to {fakeData.categories[1].name}
                    </Link>
                </BackToCategory>
                <RowItem
                    item={this.state.item}
                />
            </Page>
        );
    }
}
