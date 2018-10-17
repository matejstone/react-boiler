import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import { GlobalStyle } from '../src/globalStyles.js';

addDecorator(story => (
	<div>
		<GlobalStyle />
		{story()}
	</div>
));

const req = require.context('../src', true, /\/(?:components|scenes)\/.*\.stories\.jsx$/)

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
