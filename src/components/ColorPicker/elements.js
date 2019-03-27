import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 2rem;
    height: 1.4rem;
    background-color: ${props =>
        props.theme.colorPicker.selectedColorBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

export const ColorArea = styled.div`
    width: 80%;
    height: 80%;
    background-color: ${props => props.color};
`;

export const PickerWrapper = styled.div`
    position: fixed;
    bottom: 7rem;
    left: 7rem;
    z-index: 10;
`;
