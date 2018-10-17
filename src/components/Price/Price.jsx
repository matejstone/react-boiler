import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPrice = styled.div`
    color: #3daa4d;
`;

export default class Price extends Component {
    render() {
        return (
            <StyledPrice>
            	${this.props.amount}
            </StyledPrice>
        );
    }
}
