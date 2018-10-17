import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Price from './Price.jsx';

storiesOf('Price', module)
  .add('with text', () => (
    <Price>
        Price content
    </Price>
  ));