import React from "react";
import { HistoryButtonsBox, LeftArrow, RightArrow, RightBar } from "./elements";

export const RightColumn = ({ moveToPreviousImage, moveToNextImage, current, all }) => {
    function handleBackClick() {
        if (isBackActionEnabled()) moveToPreviousImage();
    }

    function handleForwardClick() {
        if (isForwardActionEnabled()) moveToNextImage();
    }

    function isBackActionEnabled() {
        return !!(current !== null && current > 0);
    }

    function isForwardActionEnabled() {
        return !!(current !== null && current < all - 1);
    }

    return (
        <RightBar>
            <HistoryButtonsBox>
                <LeftArrow size={40} onClick={handleBackClick} disabled={!isBackActionEnabled()} />
                <RightArrow size={40} onClick={handleForwardClick} disabled={!isForwardActionEnabled()} />
            </HistoryButtonsBox>
        </RightBar>
    );
};
