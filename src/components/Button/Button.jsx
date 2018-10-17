import React, { Component } from 'react';
import styled from 'styled-components';

const baseTextColor = '#555';
const hoverTextColor = '#00f';

const DefaultButton = styled.button`
	background-color: #fff;
	border: 1px solid ${baseTextColor};
	border-radius: 5px;
	transition: border-color 0.5s;
	color: ${baseTextColor};

	&:hover {
		color: ${hoverTextColor};
		border-color: ${hoverTextColor};
	}
`;

export default class Button extends Component {
	render() {
		return (
			<DefaultButton {...this.props} />
		);
	}
}
