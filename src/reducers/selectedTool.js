import { TYPES, TOOL_TYPES } from "../actions";
import { brush } from "../tools/Brush";
import { hand } from "../tools/Hand";
import { eraser } from "../tools/Eraser";
import { zoom } from "../tools/Zoom";
import { crop } from "../tools/Crop";

const tools = {};
tools[TOOL_TYPES.BRUSH_TOOL] = brush;
tools[TOOL_TYPES.HAND_TOOL] = hand;
tools[TOOL_TYPES.ERASER_TOOL] = eraser;
tools[TOOL_TYPES.ZOOM_TOOL] = zoom;
tools[TOOL_TYPES.CROP_TOOL] = crop;

const selectedTool = (state = null, action) => {
    switch (action.type) {
        case TYPES.SELECT_TOOL:
            return tools[action.toolType];
        default:
            return state;
    }
};

export default selectedTool;
