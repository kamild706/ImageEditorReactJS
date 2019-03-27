import React, { Component } from 'react';
import { brush } from '../../../tools/Brush';
import {
    SizeButton,
    SizeText,
    OpacityInput,
    OpacitySelector,
    Icon,
    SizePicker,
    Label,
    SizeInput,
    SizeSlider,
    SizeWrapper
} from './elements';

export class BrushToolDetails extends Component {
    state = {
        size: brush.size,
        opacity: brush.opacity
    };

    handleChange = event => {
        const { name, value } = event.target;
        brush[name] = value;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { size, opacity } = this.state;
        return (
            <>
                <SizeWrapper>
                    <SizeButton>
                        <span>
                            <Icon src="icons/brush-size2.png" />
                            <SizeText>{size}</SizeText>
                        </span>
                        <span>▼</span>
                    </SizeButton>
                    <SizePicker>
                        <div>
                            <Label>Size:</Label>
                            <SizeInput
                                value={size}
                                name="size"
                                onChange={this.handleChange}
                            />
                        </div>
                        <SizeSlider
                            min={1}
                            max={100}
                            value={size}
                            onChange={this.handleChange}
                            name="size"
                        />
                    </SizePicker>
                </SizeWrapper>

                <OpacitySelector>
                    Opacity:
                    <OpacityInput
                        name="opacity"
                        onChange={this.handleChange}
                        value={opacity}
                    />
                    %
                </OpacitySelector>
            </>
        );
    }
}
