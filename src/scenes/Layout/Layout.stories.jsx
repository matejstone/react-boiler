import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Layout from './Layout.jsx';

storiesOf('Scenes/Layout', module)
    .add('plain content', () => (
        <Layout>
            Layout content
        </Layout>
    ));