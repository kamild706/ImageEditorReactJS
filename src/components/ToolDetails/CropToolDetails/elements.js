import styled from "styled-components";

export const Button = styled.button`
    color: ${props => props.theme.toolDetails.textColor};
    background-color: ${props => props.theme.modalDialog.buttonBackgroundColor};
    border: none;
    border-radius: 3px;
`;
