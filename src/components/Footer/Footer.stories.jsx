import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Footer from './Footer.jsx';

storiesOf('Layout/Footer', module)
  .add('with text', () => (
    <Footer>
        Footer content
    </Footer>
  ));