import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPage = styled.div`
    padding: 10px;
    width: 100%;
`;

export default class Page extends Component {
    render() {
        return (
            <StyledPage>
                {this.props.children}
            </StyledPage>
        );
    }
}
