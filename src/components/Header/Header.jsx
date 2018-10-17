import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'globalStyles';

const StyledHeader = styled.div`
    background-color: ${theme.primary};
    color: ${theme.primaryText};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    font-size: 26px;
`;

export default class Header extends Component {
    render() {
        return (
            <StyledHeader>
                ProBoards React Store
            </StyledHeader>
        );
    }
}
