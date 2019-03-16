import styled from 'styled-components';

export const Wrapper = styled.main`
    // height: 100%;
    .Resizer {
        width: 2px;
        background-color: ${props => props.theme.editor.resizerColor};
        cursor: col-resize;
    }

    .SplitPane {
        position: static !important;
    }
    // z-index: 100;
    // display: flex;

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
    // display: flex;
`;

export const EditorBlock = styled.div`
    // flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const RightBar = styled.div`
    border-top: 5px solid ${props => props.theme.rightbar.borderTopColor};
    // min-width: 250px;
    height: 100%;
    background-color: ${props => props.theme.rightbar.backgroundColor};
`;

export const OpenFiles = styled.div`
    height: 2rem;
    background-color: ${props => props.theme.openfiles.backgroundColor};
`;

export const ImageArea = styled.div`
    background-color: ${props => props.theme.imagearea.backgroundColor};
    // flex: 1 1 auto;
    flex: 1;
    // height: 100%;
    // height: 0;
    // overflow-y: auto;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.canvas`
    background-color: orange;
    width: 1900px;
    height: 900px;
    margin-top: auto;
    margin-bottom: auto;
    flex: 0 0 auto;
    border: 10px solid ${props => props.theme.imagearea.backgroundColor};
`;
