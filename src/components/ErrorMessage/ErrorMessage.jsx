import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledErrorMessage = styled.div`
    border: 1px solid #f00;
    color: #000;
    padding: 10px;
    border-radius: 5px;
`;

export default class ErrorMessage extends Component {
    render() {
        return (
            <StyledErrorMessage>
                {this.props.children}
            </StyledErrorMessage>
        );
    }
}
