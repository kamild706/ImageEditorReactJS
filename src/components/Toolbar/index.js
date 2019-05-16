import React from "react";
import { StyledToolbar } from "./elements";
import Tool from "./Tool";
import { TOOL_TYPES } from "../../actions";
import VisibleColorPicker from "../../containers/VisibleColorPicker";

const Toolbar = ({ selectTool, selectedTool, color }) => {
    if (selectedTool && selectedTool.color) {
        selectedTool.color = color;
    }

    function handleClick(toolType) {
        selectTool(toolType);
    }

    return (
        <StyledToolbar>
            {/*<Tool name="Move Tool" />
            <Tool name="Rectangle Select" />
            <Tool name="Lasso Select" />
            <Tool name="Quick Selection" />
            <Tool name="Crop Tool" />
            <Tool name="Eyedropper" />
            <Tool name="Spot Healing Brush Tool" />*/}
            <Tool
                name="Brush Tool"
                onClick={() => handleClick(TOOL_TYPES.BRUSH_TOOL)}
                selected={selectedTool && selectedTool.name}
            />
            {/*<Tool name="Clone Tool" />*/}
            <Tool
                name="Eraser Tool"
                onClick={() => handleClick(TOOL_TYPES.ERASER_TOOL)}
                selected={selectedTool && selectedTool.name}
            />
            {/*<Tool name="Gradient Tool" />
            <Tool name="Blur Tool" />
            <Tool name="Dodge Tool" />
            <Tool name="Type Tool" />
            <Tool name="Pen" />
            <Tool name="Path Select" />
            <Tool name="Rectangle" />*/}
            <Tool
                name="Hand Tool"
                onClick={() => handleClick(TOOL_TYPES.HAND_TOOL)}
                selected={selectedTool && selectedTool.name}
            />
            <Tool
                name="Zoom Tool"
                onClick={() => handleClick(TOOL_TYPES.ZOOM_TOOL)}
                selected={selectedTool && selectedTool.name}
            />
            <VisibleColorPicker />
        </StyledToolbar>
    );
};

export default Toolbar;
