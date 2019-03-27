import { TOOL_TYPES } from '../actions';

class Brush {
    isDrawing = false;
    context = null;

    name = TOOL_TYPES.BRUSH_TOOL;
    size = 13;
    opacity = 100;
    color = '#000';

    setContext = context => {
        this.context = context;
    };

    onmousedown = event => {
        this.isDrawing = true;
        this.context.lineWidth = this.size;
        this.context.lineJoin = 'round';
        this.context.lineCap = 'round';
        this.context.strokeStyle = this.color;
        this.context.globalAlpha = this.opacity / 100;
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
