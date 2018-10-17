import { SET_CATEGORY_FILTER } from '../actionTypes.js';

const initialState = {
	category: null,
};

export default function(state = initialState, action) {
    console.log('===============');
    console.log('EXECUTING ACTION: ', action.type);
    console.log('PAYLOAD: ', action.payload);
    console.log('STATE: ', state);
    console.log('===============');

    switch (action.type) {
        case SET_CATEGORY_FILTER: {
            const { category } = action.payload;
            return {
            	...state,
            	category
            };
        }
        default:
            return state;
    }
}
