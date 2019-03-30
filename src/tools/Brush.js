import { TOOL_TYPES } from '../actions';
import ClickMonitor from './ClickMonitor';

class Brush {
    isDrawing = false;

    name = TOOL_TYPES.BRUSH_TOOL;
    size = 13;
    opacity = 100;
    color = '#000';

    onmousedown = (event, context) => {
        this.isDrawing = true;
        context.lineWidth = this.size;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.strokeStyle = this.color;
        context.globalAlpha = this.opacity / 100;
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

export const brush = new Brush();
