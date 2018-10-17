import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'globalStyles';

const StyledFooter = styled.div`
    background-color: ${theme.primary};
    color: ${theme.primaryText};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-size: 11px;
`;

export default class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                Totally copyright everywhere 2018-3005
            </StyledFooter>
        );
    }
}
