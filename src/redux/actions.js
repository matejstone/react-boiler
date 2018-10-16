import {
    SAMPLE_ACTION,
} from "./actionTypes";


export const sampleAction = ( id, content ) => ({
    type: SAMPLE_ACTION,
    payload: {
        id,
        content,
    },
});