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
    /* Portal styles here (though usually you will have none) */

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
        width: 340px;
        height: 180px;
        background-color: #222;
        color: white;
    }
`;

export const Header = styled.header`
    height: 1rem;
    // background-color: #484848;
    background: linear-gradient(
        to bottom,
        #595959 0%,
        #626262 3%,
        #575757 7%,
        #3c3c3c 90%,
        #3a3a3a 97%,
        #2e2e2e 100%
    );
    padding: 1rem;
`;

export const Main = styled.main`
    padding: 1rem;
    background-color: #474747;
    height: 100%;
`;

export const Label = styled.label`
    display: inline-block;
    width: 4rem;
`;

export const Input = styled.input`
    background-color: #252525;
    color: white;
    border: none;
`;

export const Div = styled.div`
    margin-bottom: 0.5rem;
`;

export const Button = styled.button`
    border: none;
    background-color: #606060;
    width: 100%;
    height: 2rem;
    margin-top: 1rem;
    border-radius: 3px;
    // border-bottom-color: rgba(0, 0, 0, 0.6);
    // border-bottom-width: 1px;
    color: white;
`;

export const CloseButton = styled.span`
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB4AAAAeABBeqfSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEGSURBVEiJ7dXNTsJAFIbh4gXohgUL0PCzgfu/BsUFe7QgAgu5CX1cMMQGOu3QYKIJb9LVfGfeTjPnNMuu/EvQxgxvGCbkhyE7QztV0sHcDztMKvKTkDkwRydF9OSUNQYl2UFYO+axTtLCa0khvKNfyPYjEnhBq07WRR7Z4APj8OwimRzd2k+X8LarcLoy1sVTp8p6WEQ2LGOB3lmSBrLmkiPZskKyTJHcpLiyLPuqWP8MmebYd3zsUhRZS5ggVZJNguTA5mwZHuxnVxkr8eu9xH2qZIRtZKPcvqGrmnqLUZ3kUiNoLmEETUsKLztUQ/EdngtFlc3otKmnuK0VheLf//Fd+XN8A8nOdB4BsdGzAAAAAElFTkSuQmCC);
    // filter: invert(1);
    width: 1.5rem;
    height: 1.5rem;
    float: right;
`;

export const HeaderTitle = styled.span`
    float: left;
`;
