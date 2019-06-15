import React, { Component } from "react";
import MenuItem from "../MenuItem";
import SubMenuItem from "../SubMenuItem";
import Editor, { toggleRotatedBy90degs } from "../../Editor";

export default class Image extends Component {
    rotateImage = degrees => {
        const canvas = document.getElementById("canvas0");
        const context = canvas.getContext("2d");
        const buffer = document.createElement("canvas");
        const bufferContext = buffer.getContext("2d");

        const { width: oldWidth, height: oldHeight } = canvas;
        buffer.width = oldWidth;
        buffer.height = oldHeight;
        bufferContext.drawImage(canvas, 0, 0);

        canvas.width = oldHeight;
        canvas.height = oldWidth;
        const dx = 0.5 * canvas.width;
        const dy = 0.5 * canvas.height;

        context.save();
        context.translate(dx, dy);
        context.rotate((degrees * Math.PI) / 180);
        context.drawImage(buffer, -dy, -dx);
        context.restore();

        Editor.resizeCanvas(canvas);
    };

    flipImage = (horizontally = true) => {
        const canvas = document.getElementById("canvas0");
        const context = canvas.getContext("2d");
        const buffer = document.createElement("canvas");
        const bufferContext = buffer.getContext("2d");

        const { width, height } = canvas;
        buffer.width = width;
        buffer.height = height;
        bufferContext.drawImage(canvas, 0, 0);
        context.save();
        if (horizontally) {
            context.translate(width, 0);
            context.scale(-1, 1);
        } else {
            context.translate(0, height);
            context.scale(1, -1);
        }

        context.drawImage(buffer, 0, 0);
        context.restore();
    };

    flipHorizontally = () => {
        this.flipImage(true);
    };

    flipVertically = () => {
        this.flipImage(false);
    };

    rotate180 = () => {
        this.rotateImage(90);
        this.rotateImage(90);
    };

    rotate90 = clockwise => {
        if (clockwise) this.rotateImage(90);
        else this.rotateImage(-90);

        toggleRotatedBy90degs();
    };

    render() {
        const { restoreOriginalImage } = this.props;
        return (
            <MenuItem name="Image">
                <SubMenuItem name="Transform">
                    <SubMenuItem name="Rotate 90° CW" onClick={() => this.rotate90(true)} />
                    <SubMenuItem name="Rotate 90° CCW" onClick={() => this.rotate90(false)} />
                    <SubMenuItem name="Rotate 180°" onClick={this.rotate180} />
                    <SubMenuItem name="Flip horizontally" onClick={this.flipHorizontally} />
                    <SubMenuItem name="Flip Vertically" onClick={this.flipVertically} />
                </SubMenuItem>
                <SubMenuItem name="Restore original" onClick={restoreOriginalImage} />
            </MenuItem>
        );
    }
}
