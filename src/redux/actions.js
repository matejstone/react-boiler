import {
    SAMPLE_ACTION,
    SET_CATEGORY_FILTER,
    SET_PRODUCTS,
} from "./actionTypes";


export const sampleAction = ( id, content ) => ({
    type: SAMPLE_ACTION,
    payload: {
        id,
        content,
    },
});

export const setCategoryFilter = category => ({
	type: SET_CATEGORY_FILTER,
	payload: {
        category,
    },
});

export const setProducts = products => ({
	type: SET_PRODUCTS,
	payload: {
		products,
	},
});
