import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from './Header.jsx';

storiesOf('Layout/Header', module)
  .add('with text', () => (
    <Header>
        Header content
    </Header>
  ));