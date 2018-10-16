import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCodeboxValueById } from 'redux/selectors';

import {
    sampleAction,
} from 'redux/actions';

export class SceneWithRedux extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
	};

	constructor(props) {
		super(props);


	}

	// This function runs when the store has updated
	componentWillReceiveProps(nextProps) {
		// nextProps will include the incoming props with
		// the update state from the store
		//
		// You should update the component state with the 
		// updated values, so the component re-renders.
		// You should also check if the state has actually changed,
		// to prevent an unnecessary render.
		if (nextProps.samples.byIds != this.state.samples) {
	        this.setState({
	            samples: nextProps.samples.byIds,
	        });
    	}
    }

	render() {
		// The render method will always have access to the latest state
		// After updating the state in componentWillReceiveProps, this
		// component will automatically render again with updated data
		// as long as it is accessed from {this.state.samples}
		return (
			<div>

			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	// You can manipulate the incoming state before it is
	// sent to componentWillReceiveProps, which allows
	// you to adjust the data to what you need, or could use
	const { byIds, allIds } = state.samples || {};

	// This will filter the state for you, only returning
	// the actual IDs (instead of nested in {this.props.samples.byIds}
	// it will be in just {this.props.samples})
	const samples = 
        allIds && state.samples.allIds.length
            ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
            : null;

    // Returns the entire state, only overwriting "samples" with the filtered one
    // You might want to consider only returning the state that is relevant in the
    // situation, rather than the entire rest of the state
	return 	{ ...state, samples }; 
}

export default connect(
	// First parameter of connect is 'mapStateToProps'
    mapStateToProps,
    // Second parameter is 'mapDispatchToProps', where you are
    // adding actions to this.props that will interact directly 
    // with the store. this.props.sampleAction({ id, content })
    // will execute the action in src/redux/actions.js
    // dispatching that event to Redux
    {
        sampleAction,
    }
    // Third, optional param
    // mergeProps = function()
    // Fourth, optional param
    // options = Object()
)(Editor);