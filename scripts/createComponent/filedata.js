function get_react_component_file_data(componentName) {
    return `import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled${componentName} = styled.div\`
    background-color: #3daa4d;
    color: #fff;
\`;

export default class ${componentName} extends Component {
    render() {
        return (
            <Styled${componentName}>
                {this.props.children}
            </Styled${componentName}>
        );
    }
}
`;
}

function get_story_component_file_data(componentName) {
    return `import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ${componentName} from './${componentName}.jsx';

storiesOf('${componentName}', module)
  .add('with text', () => (
    <${componentName}>
        ${componentName} content
    </${componentName}>
  ));`;
}

function get_index_component_file_data(componentName) {
    return `import ${componentName} from './${componentName}.jsx';

export default ${componentName};
`;
}

module.exports = {
    get_react_component_file_data,
    get_story_component_file_data,
    get_index_component_file_data,
};
