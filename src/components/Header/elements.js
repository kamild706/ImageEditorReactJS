import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // min-height: 4rem;
    // max-height: 4rem;
    height: 4rem;
    color: ${props => props.theme.header.color};
    background-color: ${props => props.theme.header.backgroundColor};
    // z-index: 1000;
`;

export const Ul = styled.ul`
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.menubar.UlBackgroundColor};
    color: ${props => props.theme.menubar.UlColor};
    display: flex;
    flex: 1;
    list-style-type: none;
    border-bottom: 1px solid ${props => props.theme.menubar.borderBottomColor};
    z-index: 1;
`;
