import { TOOL_TYPES } from "../actions";

class Crop {
    name = TOOL_TYPES.CROP_TOOL;
    isDragging = false;
    draggedCorner = "";
    previousCoords = {};
    cropArea = null;

    static dropUnit(value) {
        if (value.length === 0) return 0;
        let end = value.length - 2;
        return Number(value.substring(0, end));
    }

    onMouseDown = event => {
        const { clientX, clientY } = event;
        this.previousCoords = { clientX, clientY };

        if (event.target === event.currentTarget) {
            this.isDragging = true;
        }
        const { id } = event.target;
        this.draggedCorner = id;
    };

    onMouseUp = () => {
        this.isDragging = false;
        this.draggedCorner = "";
    };

    onMouseMove = event => {
        if (this.isDragging) this.handleDrag(event);
        if (this.draggedCorner === "topLeft") this.handleTopLeftCornerDrag(event);
        if (this.draggedCorner === "topRight") this.handleTopRightCornerDrag(event);
        if (this.draggedCorner === "bottomLeft") this.handleBottomLeftCornerDrag(event);
        if (this.draggedCorner === "bottomRight") this.handleBottomRightCornerDrag(event);
    };

    handleDrag = event => {
        const { clientX, clientY } = event;
        let dx = clientX - this.previousCoords.clientX;
        let dy = clientY - this.previousCoords.clientY;
        let prevTop = Crop.dropUnit(this.cropArea.style.top);
        let prevLeft = Crop.dropUnit(this.cropArea.style.left);
        this.cropArea.style.top = prevTop + dy + "px";
        this.cropArea.style.left = prevLeft + dx + "px";
        this.previousCoords = { clientX, clientY };
    };

    handleTopLeftCornerDrag = event => {
        const { clientX, clientY } = event;
        let dx = clientX - this.previousCoords.clientX;
        let dy = clientY - this.previousCoords.clientY;
        let prevTop = Crop.dropUnit(this.cropArea.style.top);
        let prevLeft = Crop.dropUnit(this.cropArea.style.left);
        let topOffset = prevTop + dy;
        let leftOffset = prevLeft + dx;

        let prevWidth = Number(this.cropArea.offsetWidth);
        let prevHeight = Number(this.cropArea.offsetHeight);

        this.cropArea.style.width = prevWidth - dx - 4 + "px";
        this.cropArea.style.height = prevHeight - dy - 4 + "px";
        this.cropArea.style.top = topOffset + "px";
        this.cropArea.style.left = leftOffset + "px";

        this.previousCoords = { clientX, clientY };
    };

    handleBottomLeftCornerDrag = event => {
        const { clientX, clientY } = event;
        let dx = clientX - this.previousCoords.clientX;
        let dy = clientY - this.previousCoords.clientY;
        let prevLeft = Crop.dropUnit(this.cropArea.style.left);
        let leftOffset = prevLeft + dx;

        let prevWidth = Number(this.cropArea.offsetWidth);
        let prevHeight = Number(this.cropArea.offsetHeight);

        this.cropArea.style.width = prevWidth - dx - 4 + "px";
        this.cropArea.style.height = prevHeight + dy - 4 + "px";
        this.cropArea.style.left = leftOffset + "px";

        this.previousCoords = { clientX, clientY };
    };

    handleTopRightCornerDrag = event => {
        const { clientX, clientY } = event;
        let dx = clientX - this.previousCoords.clientX;
        let dy = clientY - this.previousCoords.clientY;
        let prevTop = Crop.dropUnit(this.cropArea.style.top);
        let topOffset = prevTop + dy;

        let prevWidth = Number(this.cropArea.offsetWidth);
        let prevHeight = Number(this.cropArea.offsetHeight);

        this.cropArea.style.width = prevWidth + dx - 4 + "px";
        this.cropArea.style.height = prevHeight - dy - 4 + "px";
        this.cropArea.style.top = topOffset + "px";

        this.previousCoords = { clientX, clientY };
    };

    handleBottomRightCornerDrag = event => {
        const { clientX, clientY } = event;
        let dx = clientX - this.previousCoords.clientX;
        let dy = clientY - this.previousCoords.clientY;

        let prevWidth = Number(this.cropArea.offsetWidth);
        let prevHeight = Number(this.cropArea.offsetHeight);

        this.cropArea.style.width = prevWidth + dx - 4 + "px";
        this.cropArea.style.height = prevHeight + dy - 4 + "px";

        this.previousCoords = { clientX, clientY };
    };

    initCroptool() {
        let html = `
        <div id="cropArea">
          <div class="top">
            <div id="topLeft"></div>
            <div id="topRight"></div>
          </div>
          <div class="bottom">
            <div id="bottomLeft"></div>
            <div id="bottomRight"></div>
          </div>
        </div>
        `;

        const template = document.createElement("template");
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        document.body.append(template.content.firstChild);

        this.cropArea = document.getElementById("cropArea");
        this.cropArea.addEventListener("mousedown", this.onMouseDown);
        document.addEventListener("mouseup", this.onMouseUp);
        document.addEventListener("mousemove", this.onMouseMove);
    }

    deleteCroptool() {
        this.cropArea.removeEventListener("mousedown", this.onMouseDown);
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("mousemove", this.onMouseMove);
        let elem = this.cropArea;
        if (elem && elem.parentNode) elem.parentNode.removeChild(elem);
    }
}

export const crop = new Crop();
