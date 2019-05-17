import React, { Component } from "react";
import ReactModal from "react-modal";
import { Header, Input, Button, StyledModal, CloseButton, HeaderTitle, Label, Main, Div } from "../commons";

ReactModal.setAppElement("#root");

class NewFileModal extends Component {
    state = {
        width: 800,
        height: 600
    };

    handleCreateRequest = () => {
        let { width, height } = this.state;
        this.props.onConfirm(width, height);
        this.props.onClose();
    };

    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <StyledModal isOpen={this.props.isOpen} onRequestClose={this.props.onClose}>
                <Header>
                    <HeaderTitle>New File</HeaderTitle>
                    <CloseButton onClick={this.props.onClose} />
                </Header>
                <Main>
                    <Div>
                        <Label>Width</Label>
                        <Input onChange={this.handleInputChange} name="width" type="text" value={this.state.width} />
                        {" px"}
                    </Div>
                    <Div>
                        <Label>Height</Label>
                        <Input onChange={this.handleInputChange} name="height" type="text" value={this.state.height} />
                        {" px"}
                    </Div>
                    <Button onClick={this.handleCreateRequest}>Create</Button>
                </Main>
            </StyledModal>
        );
    }
}

export default NewFileModal;
