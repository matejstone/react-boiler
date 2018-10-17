import { createGlobalStyle } from 'styled-components';

export const theme = {
	primary: '#3daa4d',
	primaryText: '#fff',
	contentBackground: '#ccc',
};

export const GlobalStyle = createGlobalStyle`
	@import url(‘https://fonts.googleapis.com/css?family=Lato');

    body {
        font-family: 'Lato', sans-serif;
    }
`;
