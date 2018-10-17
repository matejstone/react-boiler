import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Page from './Page.jsx';

storiesOf('Page', module)
  .add('with text', () => (
    <Page>
        Page content
    </Page>
  ));