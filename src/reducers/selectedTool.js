import { TYPES } from '../actions';

const selectedTool = (state = null, action) => {
    switch (action.type) {
        case TYPES.SELECT_TOOL:
            return action.toolType;
        default:
            return state;
    }
};

export default selectedTool;
