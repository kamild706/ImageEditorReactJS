import { TYPES, TOOL_TYPES } from '../actions';
import { brush } from '../tools/Brush';

const tools = {};
tools[TOOL_TYPES.BRUSH_TOOL] = brush;

const selectedTool = (state = null, action) => {
    switch (action.type) {
        case TYPES.SELECT_TOOL:
            return tools[action.toolType];
        default:
            return state;
    }
};

export default selectedTool;
