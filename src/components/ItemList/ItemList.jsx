import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SmallItem } from 'components/Item';
import ErrorMessage from 'components/ErrorMessage';

const StyledItemList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default class ItemList extends Component {
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

    render() {
    	if (this.state.items.length < 1) {
    		return (
    			<ErrorMessage>
    				No items found
    			</ErrorMessage>
    		);
    	}


        return (
            <StyledItemList>
            	{this.state.items.map(item => {
            		return (
            			<SmallItem
            				key={item.id}
            				item={item}
            			/>
            		);
            	})}
            </StyledItemList>
        );
    }
}
