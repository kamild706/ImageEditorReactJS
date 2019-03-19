import styled from 'styled-components';
import ReactModal from 'react-modal';
import React from 'react';

function ReactModalAdapter({ className, modalClassName, ...props }) {
    return (
        <ReactModal
            className={modalClassName}
            portalClassName={className}
            {...props}
        />
    );
}

export const StyledModal = styled(ReactModalAdapter).attrs({
    overlayClassName: 'Overlay',
    modalClassName: 'Modal'
})`
    .Overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Modal {
        width: 21.25rem;
        background-color: ${props => props.theme.modalDialog.backgroundColor};
        color: white;
    }
`;

export const Header = styled.header`
    height: 1rem;
    background: linear-gradient(
        to bottom,
        #595959 0%,
        #626262 3%,
        #575757 7%,
        #3c3c3c 90%,
        #3a3a3a 97%,
        #2e2e2e 100%
    );
    padding: 0.8rem;
`;

export const Input = styled.input`
    background-color: ${props => props.theme.modalDialog.inputBackgroundColor};
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.3rem;
`;

export const Button = styled.button`
    border: none;
    background-color: ${props => props.theme.modalDialog.buttonBackgroundColor};
    width: 100%;
    height: 2rem;
    margin-top: 1rem;
    border-radius: 3px;
    color: white;
`;

export const CloseButton = styled.span`
    background-image: url('icons/cancel.png');
    filter: invert(1);
    width: 1.2rem;
    height: 1.2rem;
    background-size: 1.2rem 1.2rem;
    float: right;
    cursor: pointer;
`;

export const HeaderTitle = styled.span`
    float: left;
    font-size: 1.1rem;
`;
