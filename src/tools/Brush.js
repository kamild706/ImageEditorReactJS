import { TOOL_TYPES } from "../actions";
import ClickMonitor from "./ClickMonitor";

class Brush {
    isDrawing = false;

    name = TOOL_TYPES.BRUSH_TOOL;
    size = 13;
    opacity = 100;
    color = "#000";

    onmousedown = ({ offsetX, offsetY }, context) => {
        this.isDrawing = true;
        context.lineWidth = this.size;
        context.lineJoin = "round";
        context.lineCap = "round";
        context.globalCompositeOperation = "source-over";
        context.strokeStyle = this.color;
        context.globalAlpha = this.opacity / 100;
        context.beginPath();
        context.moveTo(offsetX, offsetY);
    };

    onmousemove = ({ offsetX, offsetY }, context) => {
        if (this.isDrawing) {
            context.lineTo(offsetX, offsetY);
            context.stroke();
        }
    };

    onmouseup = event => {
        this.isDrawing = false;
    };

    onmouseleave = event => {
        this.isDrawing = false;
    };

    onmouseenter = ({ offsetX, offsetY }, context) => {
        if (ClickMonitor.leftButtonPressed) {
            this.isDrawing = true;
            context.moveTo(offsetX, offsetY);
        }
    };
}

export const brush = new Brush();
