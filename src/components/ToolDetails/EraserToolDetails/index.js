import React, { Component } from "react";
import { eraser } from "../../../tools/Eraser";
import {
    SizeButton,
    SizeText,
    Icon,
    SizePicker,
    Label,
    SizeInput,
    SizeSlider,
    SizeWrapper
} from "../BrushToolDetails/elements";

export class EraserToolDetails extends Component {
    state = {
        size: eraser.size
    };

    handleChange = event => {
        const { name, value } = event.target;
        eraser[name] = value;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { size } = this.state;
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
            </>
        );
    }
}
