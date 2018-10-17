import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { connect } from "react-redux";
import { setCategoryFilter } from 'redux/actions';
// import { getProducts, getProductsByCategory } from 'redux/selectors';

import fakeData from 'fakeData';

import { theme } from 'globalStyles';

const StyledSidebar = styled.div`
    background-color: ${theme.primary};
    color: ${theme.primaryText};
    display: flex;
    flex-direction: column;
    flex: 0 0 200px;
`;

class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: fakeData.categories,
		};
	}

    render() {
        return (
            <StyledSidebar>
                {this.props.children}
                <h3>Category</h3>
                <ul>
                	<li>
                		<Link to="/products">All</Link>
                	</li>
                	{this.state.categories.map(category => {
                		return(
                			<li key={category.id}>
		                		<Link
		                			to={`/products/${category.id}`}
		                			onClick={() => this.props.setCategoryFilter(category.id)}
		                		>
		                			{category.name}
		                		</Link>
		                	</li>
                		);
                	})}
                </ul>
            </StyledSidebar>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return state;
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
        setCategoryFilter,
    }
    // Third, optional param
    // mergeProps = function()
    // Fourth, optional param
    // options = Object()
)(Sidebar);