import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Sidebar from './Sidebar.jsx';

storiesOf('Layout/Sidebar', module)
  .add('Sidebar', () => (
  	<div>
	  	<h1>Default state</h1>
	    <Sidebar>
	        Sidebar content
	    </Sidebar>
	    <h1>Inside a flex container</h1>
	    <div style={{ height: 500, backgroundColor: '#ccc', display: 'flex', }}>
	    	<Sidebar>
	    		Content
	    	</Sidebar>
	    </div>
    </div>
  ));