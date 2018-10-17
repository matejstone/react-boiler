import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ItemList from './ItemList.jsx';

import fakeData from 'fakeData';

storiesOf('ItemList', module)
  .add('Simple row display', () => (
    <ItemList
    	items={fakeData.products}
    >
        ItemList content
    </ItemList>
  ));