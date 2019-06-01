import React, { Component } from "react";
import ReactModal from "react-modal";
import {
    Header,
    Input,
    Button,
    StyledModal,
    CloseButton,
    HeaderTitle,
    Label,
    Main,
    Div,
    Select,
    Option
} from "../commons";

ReactModal.setAppElement("#root");

class SobelFilterModal extends Component {
    state = {
        value: "horizontal"
    };

    handleCreateRequest = () => {
        let { value } = this.state;
        this.props.onConfirm({ direction: value });
        this.props.onClose();
    };

    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
    };

    render() {
        const { isOpen, onClose, title } = this.props;
        return (
            <StyledModal isOpen={isOpen} onRequestClose={onClose}>
                <Header>
                    <HeaderTitle>{title ? title : "Sobel"}</HeaderTitle>
                    <CloseButton onClick={onClose} />
                </Header>
                <Main>
                    <Div>
                        <Label>Direction</Label>
                        <Select value={this.state.value} onChange={this.handleChange}>
                            <Option value="horizontal">Horizontal</Option>
                            <Option value="vertical">Vertical</Option>
                        </Select>
                    </Div>
                    <Button onClick={this.handleCreateRequest}>Apply</Button>
                </Main>
            </StyledModal>
        );
    }
}

export default SobelFilterModal;
