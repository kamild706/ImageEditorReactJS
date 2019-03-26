import React, { Component } from 'react';
import { Layer } from './elements';

export class CanvasLayer extends Component {
    state = {
        listenersActive: false
    };
    layer = React.createRef();

    fillCanvas = () => {
        const canvas = this.layer.current;
        const context = canvas.getContext('2d');
        canvas.width = this.props.width;
        canvas.height = this.props.height;

        const contents = this.props.contents;
        if (contents) {
            const image = new Image();
            image.src = contents;
            image.onload = () => {
                context.drawImage(image, 0, 0);
            };
        } else {
            // context.fillStyle = 'white';
            // context.fillRect(0, 0, canvas.width, canvas.height);
        }
    };

    componentDidMount() {
        this.fillCanvas();
        this.setupListeners();
    }

    componentDidUpdate() {
        this.fillCanvas();
        if (!this.state.listenersActive) {
            this.setupListeners();
        }
    }

    componentWillUnmount() {
        this.removeListeners();
    }

    setupListeners() {
        const canvas = this.layer.current;
        const context = canvas.getContext('2d');
        const tool = this.props.tool;

        if (tool) {
            this.setState({
                listenersActive: true
            });

            tool.setContext(context);
            canvas.addEventListener('mousedown', this.onMouseDown);
            canvas.addEventListener('mousemove', this.onMouseMove);
            canvas.addEventListener('mouseup', this.onMouseUp);
            canvas.addEventListener('mouseleave', this.onMouseLeave);
        }
    }

    removeListeners() {
        const canvas = this.layer.current;
        canvas.removeEventListener('mousedown', this.onMouseDown);
        canvas.removeEventListener('mousemove', this.onMouseMove);
        canvas.removeEventListener('mouseup', this.onMouseUp);
        canvas.removeEventListener('mouseleave', this.onMouseLeave);
    }

    onMouseDown = event => {
        this.props.tool.onmousedown(event);
    };

    onMouseMove = event => {
        this.props.tool.onmousemove(event);
    };

    onMouseUp = event => {
        this.props.tool.onmouseup(event);
    };

    onMouseLeave = event => {
        this.props.tool.onmouseleave(event);
    };

    render() {
        return <Layer ref={this.layer} index={this.props.index} />;
    }
}
