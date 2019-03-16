import React from 'react';
import { StyledToolbar } from './elements';
import Tool from './Tool';

const Toolbar = () => {
    return (
        <StyledToolbar>
            <Tool name="Move Tool" />
            <Tool name="Rectangle Select" />
            <Tool name="Lasso Select" />
            <Tool name="Quick Selection" />
            <Tool name="Crop Tool" />
            <Tool name="Eyedropper" />
            <Tool name="Spot Healing Brush Tool" />
            <Tool name="Brush Tool" />
            <Tool name="Clone Tool" />
            <Tool name="Eraser Tool" />
            <Tool name="Gradient Tool" />
            <Tool name="Blur Tool" />
            <Tool name="Dodge Tool" />
            <Tool name="Type Tool" />
            <Tool name="Pen" />
            <Tool name="Path Select" />
            <Tool name="Rectangle" />
            <Tool name="Hand Tool" />
            <Tool name="Zoom Tool" />
        </StyledToolbar>
    );
};

export default Toolbar;
