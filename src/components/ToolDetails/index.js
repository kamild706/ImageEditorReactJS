import React from 'react';
import { ToolDetailsBar, ToolIcon, Icon } from './elements';

const ToolDetails = ({ selectedTool, path }) => {
    function computePath() {
        let computedName = selectedTool.name.toLowerCase().replace(/_/g, '-');
        return `icons/${computedName}.png`;
    }

    return (
        <ToolDetailsBar>
            {selectedTool && (
                <ToolIcon>
                    <Icon alt={selectedTool.name} src={path || computePath()} />
                </ToolIcon>
            )}
        </ToolDetailsBar>
    );
};

export default ToolDetails;
