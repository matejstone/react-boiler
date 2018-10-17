import { 
    SAMPLE_ACTION,
} from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function(state = initialState, action) {
    // console.log('===============');
    // console.log('EXECUTING ACTION: ', action.type);
    // console.log('PAYLOAD: ', action.payload);
    // console.log('STATE: ', state);
    // console.log('===============');

    switch (action.type) {
        // This sample action adds a new entry into the store
        // for id {id} and content {content}
        // It will be accessible in the store
        // by id {store.samples.byIds[id]}
        // and all IDs will be available in {store.samples.allIds = [id,...]}
        case SAMPLE_ACTION: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        id,
                        content,
                    }
                },
            };
        }
        // Removes an item from the store
        // Note that it does not mutate the payload or state
        // But instead creates a copy before setting it back 
        //
        // case SAMPLE_DELETE_ACTION: {
        //     const { id } = action.payload;
        //     const newStateById = Object.assign({}, state.byIds);
        //     delete newStateById[id];

        //     return Object.assign({}, state, {
        //         allIds: [ ...state.allIds.filter((foundId) => foundId !== id)],
        //         byIds: newStateById,
        //     });
        // }


        default:
          return state;
    }
}
