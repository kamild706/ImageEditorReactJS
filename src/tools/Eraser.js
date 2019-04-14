import { TOOL_TYPES } from "../actions";
import ClickMonitor from "./ClickMonitor";

class Eraser {
    isDrawing = false;

    name = TOOL_TYPES.ERASER_TOOL;
    size = 13;
    _color = "#fff";

    onmousedown = (event, context) => {
        this.isDrawing = true;
        context.lineWidth = this.size;
        context.lineJoin = "round";
        context.lineCap = "round";
        context.strokeStyle = this._color;
        context.globalCompositeOperation = "destination-out";
        context.beginPath();
        context.moveTo(event.offsetX, event.offsetY);
    };

    onmousemove = (event, context) => {
        if (this.isDrawing) {
            context.lineTo(event.offsetX, event.offsetY);
            context.stroke();
        }
    };

    onmouseup = event => {
        this.isDrawing = false;
    };

    onmouseleave = event => {
        this.isDrawing = false;
    };

    onmouseenter = (event, context) => {
        if (ClickMonitor.leftButtonPressed) {
            this.isDrawing = true;
            context.moveTo(event.offsetX, event.offsetY);
        }
    };
}

export const eraser = new Eraser();
