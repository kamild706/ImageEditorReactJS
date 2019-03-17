import React, { Component } from 'react';
import { Layer } from './elements';

export class CanvasLayer extends Component {
    constructor(props) {
        super(props);

        this.layer = React.createRef();
    }

    componentDidMount() {
        const canvas = this.layer.current;
        canvas.width = this.props.width;
        canvas.height = this.props.height;

        const context = canvas.getContext('2d');
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    render() {
        return <Layer ref={this.layer} index={this.props.index} />;
    }
}
