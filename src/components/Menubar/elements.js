import styled from 'styled-components';
import { Ul } from '../Header/elements';

export const StyledMenuItem = styled.li`
    position: relative;
    // display: inline;
    padding: 0 0.625rem;
    line-height: 2rem;
    font-size: 0.82rem;

    :hover {
        background-color: ${props => props.theme.menuItem.backgroundColor};
        border-radius: 2px;
        cursor: pointer;
    }
`;

export const DropdownList = styled(Ul)`
    background-color: ${props => props.theme.menuItem.dropdown.backgroundColor};
    border: none;
    // display: none;
    display: inline;
    position: absolute;
    top: 1.8rem;
    left: 0;
    min-width: 9rem;
    box-shadow: 1px 1px 5px grey;
`;

export const DropdownItem = styled(StyledMenuItem)`
    box-sizing: border-box;
    display: block;
    color: black;

    :hover {
        background-color: ${props =>
            props.theme.menuItem.dropdown.hoverBackgroundColor};
    }

    span {
        :nth-child(2) {
            float: right;
            font-size: 0.75rem;
        }
    }
`;

export const NestedDropdownList = styled(DropdownList)`
    //background-color: ${props =>
        props.theme.menuItem.nestedDropdown.backgroundColor};
    // display: none;
    //display: inline;
    //position: absolute;
    top: 0;
    left: 9rem;
    width: 9rem;
    border-left: 1px solid #222;
`;
