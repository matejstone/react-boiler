import { SET_PRODUCTS } from '../actionTypes.js';

const initialState = [];

export default function(state = initialState, action) {
    console.log('===============');
    console.log('EXECUTING ACTION: ', action.type);
    console.log('PAYLOAD: ', action.payload);
    console.log('STATE: ', state);
    console.log('===============');

    switch (action.type) {
        case SET_PRODUCTS: {
            const { products } = action.payload;
            return [ ...products ];
        }
        default:
            return state;
    }
}
