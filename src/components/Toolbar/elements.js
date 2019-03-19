import styled from 'styled-components';

export const StyledToolbar = styled.div`
    border-top: 5px solid ${props => props.theme.toolbar.borderTopColor};
    box-sizing: border-box;
    height: 100%;
    background-color: ${props => props.theme.toolbar.backgroundColor};
    text-align: center;
`;

export const StyledTool = styled.button`
    background-color: ${props => props.theme.toolbar.button.backgroundColor};
    border: none;
    color: ${props => props.theme.toolbar.button.color};
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;

    :hover {
        background-color: ${props =>
            props.theme.toolbar.button.hoverBackgroundColor};
        border-radius: 2px;
    }
`;

export const Icon = styled.img`
    width: 1.125rem;
    filter: invert(100%);
`;
