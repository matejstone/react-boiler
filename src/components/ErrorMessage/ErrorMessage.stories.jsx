import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ErrorMessage from './ErrorMessage.jsx';

storiesOf('ErrorMessage', module)
  .add('with text', () => (
    <ErrorMessage>
        ErrorMessage content
    </ErrorMessage>
  ));