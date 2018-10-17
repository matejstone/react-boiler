import React, { Component } from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

import { theme } from 'globalStyles';

const StyledLayout = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	flex-wrap: wrap;
`;

const SidebarContentWrapper = styled.div`
	display: flex;
	flex: 1 1 auto;
	flex-direction: row;
`;

const Content = styled.div`
	display: flex;
	flex: 1 1 auto;
	background-color: ${theme.contentBackground};
`;

export default class Layout extends Component {
	render() {
		return (
			<StyledLayout>
				<Header />
				<SidebarContentWrapper>
					<Sidebar />
					<Content>
						{this.props.children}
					</Content>
				</SidebarContentWrapper>
				<Footer />
			</StyledLayout>
		);
	}
}
