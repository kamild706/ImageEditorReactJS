import React from 'react';
import { StyledTool, Icon } from './elements';

const Tool = ({ name, path, selected, onClick }) => {
    function computePath() {
        let computedName = name.toLowerCase().replace(/ /g, '-');
        return `icons/${computedName}.png`;
    }
    return (
        <StyledTool
            onClick={onClick}
            selected={selected === name.toUpperCase().replace(/ /g, '_')}
            title={name}
        >
            <Icon alt={name} src={path || computePath()} />
        </StyledTool>
    );
};

export default Tool;
