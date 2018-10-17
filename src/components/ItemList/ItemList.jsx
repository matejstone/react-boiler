import React, { Component } from 'react';

import equal from 'fast-deep-equal';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import fakeData from 'fakeData';

import { SmallItem } from 'components/Item';
import ErrorMessage from 'components/ErrorMessage';

const StyledItemList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

class ItemList extends Component {
	static defaultProps = {
		items: [],
	};

	static propTypes = {
		items: PropTypes.array.isRequired,
	};

	constructor(props) {
		super(props);

        this.state = {
            items: this.props.items,
        };
	}

    componentDidUpdate(prevProps) {
        if (!equal(prevProps.items, this.props.items)) {
            this.setState({
                items: this.props.items,
            });
        }
        
    }    

    render() {
    	if (this.state.items === undefined || this.state.items.length < 1) {
    		return (
    			<ErrorMessage>
    				No items found
    			</ErrorMessage>
    		);
    	}


        return (
            <StyledItemList>
            	{this.state.items.map(product => {
            		return (
            			<SmallItem
            				key={product.id}
            				item={product}
            			/>
            		);
            	})}
            </StyledItemList>
        );
    }
}

export default ItemList;
