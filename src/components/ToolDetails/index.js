import React from 'react';
import { ToolDetailsBar, ToolIcon, Icon } from './elements';

const ToolDetails = ({ selectedTool, path }) => {
    function computePath() {
        let computedName = selectedTool.toLowerCase().replace(/_/g, '-');
        return `icons/${computedName}.png`;
    }

    return (
        <ToolDetailsBar>
            {selectedTool && (
                <ToolIcon>
                    <Icon alt={selectedTool} src={path || computePath()} />
                </ToolIcon>
            )}
        </ToolDetailsBar>
    );
};

export default ToolDetails;
