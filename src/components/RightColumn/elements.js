import styled from "styled-components";

export const RightBar = styled.div`
    border-top: 5px solid ${props => props.theme.rightbar.borderTopColor};
    height: 100%;
    background-color: ${props => props.theme.rightbar.backgroundColor};
`;

export const HistoryButtonsBox = styled.div`
    height: 5rem;
    display: flex;
    justify-content: space-around;
`;

export const LeftArrow = styled.i`
    background: url("icons/left-arrow.png") no-repeat;
    height: ${props => props.size + "px"};
    width: ${props => props.size + "px"};
    display: inline-block;
    background-size: ${props => props.size + "px"};
    filter: ${props =>
        props.disabled
            ? "brightness(0) saturate(100%) invert(95%) sepia(2%) saturate(291%) hue-rotate(357deg) brightness(85%) contrast(92%)"
            : ""};
`;

export const RightArrow = styled.i`
    background: url("icons/right-arrow.png") no-repeat;
    height: ${props => props.size + "px"};
    width: ${props => props.size + "px"};
    display: inline-block;
    background-size: ${props => props.size + "px"};
    filter: ${props =>
        props.disabled
            ? "brightness(0) saturate(100%) invert(95%) sepia(2%) saturate(291%) hue-rotate(357deg) brightness(85%) contrast(92%)"
            : ""};
`;
