import React from 'react';
import { StyledTool, Icon } from './elements';

const Tool = ({ name, path }) => {
    function computePath() {
        let computedName = name.toLowerCase().replace(/ /g, '-');
        return `icons/${computedName}.png`;
    }
    return (
        <StyledTool title={name}>
            <Icon alt={name} src={path || computePath()} />
        </StyledTool>
    );
};

export default Tool;
