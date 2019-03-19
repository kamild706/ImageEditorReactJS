import React, { Component } from 'react';
import { Layer } from './elements';

export class CanvasLayer extends Component {
    constructor(props) {
        super(props);

        this.layer = React.createRef();
    }

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
            context.fillStyle = 'white';
            context.fillRect(0, 0, canvas.width, canvas.height);
        }
    };

    componentDidMount() {
        this.fillCanvas();
    }

    componentDidUpdate() {
        this.fillCanvas();
    }

    render() {
        return <Layer ref={this.layer} index={this.props.index} />;
    }
}
