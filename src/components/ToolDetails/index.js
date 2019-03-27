import React from 'react';
import { ToolDetailsBar, ToolIcon, Icon } from './elements';
import { TOOL_TYPES } from '../../actions';
import { BrushToolDetails } from './BrushToolDetails';

const COMPONENTS = {};
COMPONENTS[TOOL_TYPES.BRUSH_TOOL] = <BrushToolDetails />;

const ToolDetails = ({ selectedTool, path }) => {
    function computePath() {
        let computedName = selectedTool.name.toLowerCase().replace(/_/g, '-');
        return `icons/${computedName}.png`;
    }

    return (
        <ToolDetailsBar>
            {selectedTool && (
                <>
                    <ToolIcon>
                        <Icon
                            alt={selectedTool.name}
                            src={path || computePath()}
                        />
                    </ToolIcon>
                    {COMPONENTS[selectedTool.name]}
                </>
            )}
        </ToolDetailsBar>
    );
};

export default ToolDetails;
