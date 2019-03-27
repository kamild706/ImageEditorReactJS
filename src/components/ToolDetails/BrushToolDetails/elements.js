import styled from 'styled-components';
import { Input } from '../../Modals/commons';

export const SizeButton = styled.button`
    color: ${props => props.theme.toolDetails.textColor};
    background-color: ${props =>
        props.theme.toolDetails.button.backgroundColor};
    border: none;
    position: relative;
    top: 0.3125rem;
`;

export const SizeText = styled.span`
    font-size: 0.75rem;
    position: absolute;
    left: 0.375rem;
    top: 0.8125rem;
`;

export const Icon = styled.img`
    filter: invert(100%);
`;

export const OpacitySelector = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0.625rem;
`;

export const OpacityInput = styled.input`
    height: 0.8125rem;
    width: 1.5625rem;
    margin-right: 0.3125rem;
    border: none;
    color: ${props => props.theme.toolDetails.textColor};
    background-color: ${props => props.theme.toolDetails.input.backgroundColor};
    padding: 0.3125rem;
`;

export const SizeWrapper = styled.div`
    position: relative;
`;

export const SizePicker = styled.div`
    width: 10rem;
    height: 5rem;
    display: none;
    background-color: ${props =>
        props.theme.toolDetails.sizePicker.backgroundColor};
    border: 5px solid ${props => props.theme.toolDetails.sizePicker.borderColor};
    padding: 0.9375rem;
    position: absolute;
    z-index: 10;
    top: 1.5rem;
    left: 0.1rem;

    ${SizeButton}:hover ~ & {
        display: block;
    }

    :hover {
        display: block;
    }
`;

export const SizeInput = styled(Input)`
    width: 2rem;
    float: right;
`;

export const Label = styled.label``;

export const SizeSlider = styled.input.attrs({
    type: 'range'
})`
    width: 10rem;
`;
