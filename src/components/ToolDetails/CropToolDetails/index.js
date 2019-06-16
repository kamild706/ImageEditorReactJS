import React, { Component } from "react";
import { Button } from "./elements";
import { resetScale, scale } from "../../Editor";
import { crop } from "../../../tools/Crop";

export class CropToolDetails extends Component {
    render() {
        return <Button onClick={this.handleClick}>Crop</Button>;
    }

    handleClick = event => {
        let cropArea = document.getElementById("cropArea");
        let canvas = document.getElementById("canvas0");
        let cropRect = cropArea.getBoundingClientRect();
        let canvasRect = canvas.getBoundingClientRect();

        let sx = cropRect.left < canvasRect.left ? 0 : cropRect.left - canvasRect.left;
        let sy = cropRect.top < canvasRect.top ? 0 : cropRect.top - canvasRect.top;
        let sWidth = Math.min(cropRect.width, canvasRect.width);
        let sHeight = Math.min(cropRect.height, canvasRect.height);

        let cs2 = document.createElement("canvas");
        let cs2Context = cs2.getContext("2d");
        cs2.width = sWidth / scale;
        cs2.height = sHeight / scale;
        cs2Context.drawImage(
            canvas,
            sx / scale,
            sy / scale,
            sWidth / scale,
            sHeight / scale,
            0,
            0,
            sWidth / scale,
            sHeight / scale
        );

        canvas.width = sWidth / scale;
        canvas.height = sHeight / scale;
        resetScale();

        canvas.style.width = sWidth / scale + "px";
        canvas.style.height = sHeight / scale + "px";
        canvas.parentElement.style.width = sWidth / scale + "px";
        canvas.parentElement.style.height = sHeight / scale + "px";

        let context = canvas.getContext("2d");
        context.drawImage(cs2, 0, 0);

        crop.deleteCroptool();
    };
}
