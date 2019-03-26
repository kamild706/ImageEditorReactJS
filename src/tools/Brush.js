import { TOOL_TYPES } from '../actions';

class Brush {
    isDrawing = false;
    context = null;
    name = TOOL_TYPES.BRUSH_TOOL;

    setContext = context => {
        this.context = context;
    };

    onmousedown = event => {
        this.isDrawing = true;
        this.context.moveTo(event.offsetX, event.offsetY);
    };

    onmousemove = event => {
        if (this.isDrawing) {
            this.context.lineTo(event.offsetX, event.offsetY);
            this.context.stroke();
        }
    };

    onmouseup = event => {
        this.isDrawing = false;
    };

    onmouseleave = event => {
        this.isDrawing = false;
    };
}

export const brush = new Brush();
