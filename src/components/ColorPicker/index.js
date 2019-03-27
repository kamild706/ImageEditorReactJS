import React, { Component } from 'react';
import { Wrapper, ColorArea, PickerWrapper } from './elements';
import { PhotoshopPicker } from 'react-color';

class ColorPicker extends Component {
    state = {
        open: false,
        pickedColor: this.props.color
    };

    handleOk = () => {
        this.setState({
            open: false
        });
        this.props.selectColor(this.state.pickedColor);
    };

    handleCancel = () => {
        this.setState({
            open: false
        });
    };

    handleChangeComplete = color => {
        this.setState({
            pickedColor: color.hex
        });
    };

    handleClick = () => {
        this.setState(state => ({
            open: !state.open
        }));
    };

    render() {
        return (
            <>
                <Wrapper>
                    <ColorArea
                        color={this.props.color}
                        onClick={this.handleClick}
                    />
                </Wrapper>
                {this.state.open && (
                    <PickerWrapper>
                        <PhotoshopPicker
                            color={this.state.pickedColor}
                            onAccept={this.handleOk}
                            onCancel={this.handleCancel}
                            onChangeComplete={this.handleChangeComplete}
                        />
                    </PickerWrapper>
                )}
            </>
        );
    }
}

export default ColorPicker;
