import { TYPES, TOOL_TYPES } from "../actions";
import { brush } from "../tools/Brush";
import { hand } from "../tools/Hand";
import { eraser } from "../tools/Eraser";

const tools = {};
tools[TOOL_TYPES.BRUSH_TOOL] = brush;
tools[TOOL_TYPES.HAND_TOOL] = hand;
tools[TOOL_TYPES.ERASER_TOOL] = eraser;

const selectedTool = (state = null, action) => {
    switch (action.type) {
        case TYPES.SELECT_TOOL:
            return tools[action.toolType];
        default:
            return state;
    }
};

export default selectedTool;
