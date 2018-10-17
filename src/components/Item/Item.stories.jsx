import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { SmallItem, RowItem } from 'components/Item';

storiesOf('Item', module)
    .add('SmallItem', () => (
    	<div>
	    	<h1>SmallItem</h1>
	        <SmallItem
	        	item={{
	        		id: "1",
	        		name: 'Item Name',
	        		price: '9999',
	        		image: '/paper.jpeg',
	        	}}
	        />
        </div>
    ))
    .add('RowItem', () => (
    	<div>
	    	<h1>RowItem</h1>
	        <RowItem
	        	item={{
	        		id: "1",
	        		name: 'Item Name',
	        		price: '9999',
	        		image: '/paper.jpeg',
	        	}}
	        />
        </div>
    ));