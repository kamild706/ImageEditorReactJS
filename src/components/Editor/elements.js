import styled from "styled-components";
import { TOOL_TYPES } from "../../actions";

export const Wrapper = styled.main`
    .Resizer {
        width: 2px;
        background-color: ${props => props.theme.editor.resizerColor};
        cursor: col-resize;
    }

    .SplitPane {
        position: static !important;
    }

    position: absolute;
    top: 4rem;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const MainBlock = styled.section`
    height: 100%;

    .Resizer {
        width: 3px;
        cursor: col-resize;
    }
    flex: 1;
`;

export const EditorBlock = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const RightBar = styled.div`
    border-top: 5px solid ${props => props.theme.rightbar.borderTopColor};
    height: 100%;
    background-color: ${props => props.theme.rightbar.backgroundColor};
`;

export const OpenFiles = styled.div`
    height: 2rem;
    background-color: ${props => props.theme.openfiles.backgroundColor};
`;

export const ImageArea = styled.div`
    background-color: ${props => props.theme.imagearea.backgroundColor};
    flex: 1;
    overflow: auto;
    display: flex;
    align-items: center;
    cursor: ${props =>
        props.tool && props.tool.name === TOOL_TYPES.HAND_TOOL
            ? "grab"
            : "crosshair"};
`;
