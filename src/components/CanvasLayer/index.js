import React, { Component } from "react";
import { Layer } from "./elements";
import ClickMonitor from "../../tools/ClickMonitor";
import { scale, resetScale } from "../Editor";
import { TOOL_TYPES } from "../../actions";

export class CanvasLayer extends Component {
    fillCanvas = () => {
        const canvas = this.layer;
        const context = canvas.getContext("2d");
        canvas.width = this.props.width;
        canvas.height = this.props.height;

        const contents = this.props.contents;
        if (contents) {
            const image = new Image();
            image.src = contents;
            image.onload = () => {
                context.drawImage(image, 0, 0);
            };
        }
    };

    componentDidMount() {
        this.fillCanvas();
        this.setupListeners();

        const { parentElement } = this.layer;
        this.layer.style.width = null;
        this.layer.style.height = null;
        parentElement.style.width = null;
        parentElement.style.height = null;
        resetScale();
    }

    componentDidUpdate(prevProps) {
        const { tool: prevTool } = prevProps;
        if (prevTool && prevTool.name === TOOL_TYPES.CROP_TOOL) {
            prevTool.deleteCroptool();
        }
        const { tool } = this.props;
        if (tool && tool.name === TOOL_TYPES.CROP_TOOL) {
            tool.initCroptool();
        }
    }

    componentWillUnmount() {
        this.removeListeners();
        const { tool } = this.props;
        if (tool && tool.name === TOOL_TYPES.CROP_TOOL) {
            tool.deleteCroptool();
        }
    }

    setupListeners() {
        const canvas = this.layer;
        canvas.addEventListener("mousedown", this.onMouseDown);
        canvas.addEventListener("mousemove", this.onMouseMove);
        canvas.addEventListener("mouseup", this.onMouseUp);
        canvas.addEventListener("mouseleave", this.onMouseLeave);
        canvas.addEventListener("mouseenter", this.onMouseEnter);

        const editor = document.getElementById("editor");
        editor.addEventListener("mousedown", ClickMonitor.onButtonPressed);
        editor.addEventListener("mouseup", ClickMonitor.onButtonReleased);
    }

    removeListeners() {
        const canvas = this.layer;
        canvas.removeEventListener("mousedown", this.onMouseDown);
        canvas.removeEventListener("mousemove", this.onMouseMove);
        canvas.removeEventListener("mouseup", this.onMouseUp);
        canvas.removeEventListener("mouseleave", this.onMouseLeave);
        canvas.removeEventListener("mouseenter", this.onMouseEnter);

        const editor = document.getElementById("editor");
        editor.removeEventListener("mousedown", ClickMonitor.onButtonPressed);
        editor.removeEventListener("mouseup", ClickMonitor.onButtonReleased);
    }

    onMouseDown = event => {
        const { tool } = this.props;
        const context = this.layer.getContext("2d");
        const pos = {
            offsetX: event.offsetX / scale,
            offsetY: event.offsetY / scale
        };
        if (tool && tool.onmousedown) tool.onmousedown(pos, context);
    };

    onMouseMove = event => {
        const { tool } = this.props;
        const context = this.layer.getContext("2d");
        const pos = {
            offsetX: event.offsetX / scale,
            offsetY: event.offsetY / scale
        };
        if (tool && tool.onmousemove) tool.onmousemove(pos, context);
    };

    onMouseUp = event => {
        const { tool } = this.props;
        const pos = {
            offsetX: event.offsetX / scale,
            offsetY: event.offsetY / scale
        };
        if (tool && tool.onmouseup) tool.onmouseup(pos);
    };

    onMouseLeave = event => {
        const { tool } = this.props;
        const pos = {
            offsetX: event.offsetX / scale,
            offsetY: event.offsetY / scale
        };
        if (tool && tool.onmouseleave) tool.onmouseleave(pos);
    };

    onMouseEnter = event => {
        const { tool } = this.props;
        const context = this.layer.getContext("2d");
        if (tool && tool.onmouseenter) {
            const pos = {
                offsetX: event.offsetX / scale,
                offsetY: event.offsetY / scale
            };
            tool.onmouseenter(pos, context);
        }
    };

    render() {
        return <Layer ref={node => (this.layer = node)} id={this.props.id} index={this.props.index} />;
    }
}
