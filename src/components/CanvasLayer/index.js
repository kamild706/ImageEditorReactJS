import React, { Component } from "react";
import { Layer } from "./elements";
import ClickMonitor from "../../tools/ClickMonitor";

export class CanvasLayer extends Component {
    layer = React.createRef();

    fillCanvas = () => {
        const canvas = this.layer.current;
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

    shouldComponentUpdate(nextProps) {
        if (nextProps != null) return false;
    }

    componentDidMount() {
        this.fillCanvas();
        this.setupListeners();
    }

    componentDidUpdate() {
        // this.fillCanvas();
    }

    componentWillUnmount() {
        this.removeListeners();
    }

    setupListeners() {
        const canvas = this.layer.current;
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
        const canvas = this.layer.current;
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
        const context = this.layer.current.getContext("2d");
        if (tool && tool.onmousedown) tool.onmousedown(event, context);
    };

    onMouseMove = event => {
        const { tool } = this.props;
        const context = this.layer.current.getContext("2d");
        if (tool && tool.onmousemove) tool.onmousemove(event, context);
    };

    onMouseUp = event => {
        const { tool } = this.props;
        if (tool && tool.onmouseup) tool.onmouseup(event);
    };

    onMouseLeave = event => {
        const { tool } = this.props;
        if (tool && tool.onmouseleave) tool.onmouseleave(event);
    };

    onMouseEnter = event => {
        const { tool } = this.props;
        const context = this.layer.current.getContext("2d");
        if (tool && tool.onmouseenter) {
            tool.onmouseenter(event, context);
        }
    };

    render() {
        return (
            <Layer
                ref={this.layer}
                id={this.props.id}
                index={this.props.index}
            />
        );
    }
}
