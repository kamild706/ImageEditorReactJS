import React, { Component } from "react";
import ReactModal from "react-modal";
import { Header, Input, Button, StyledModal, CloseButton, HeaderTitle, Label, Main, Div } from "../commons";

ReactModal.setAppElement("#root");

class GradientFilterModal extends Component {
    state = {
        params: "1, 2, 3, 4"
    };

    handleCreateRequest = () => {
        let { params } = this.state;
        const arr = params
            .replace(/(, *)|( +)/g, " ")
            .split(" ")
            .map(num => Number(num));
        this.props.onConfirm({ intparams: arr });
        this.props.onClose();
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <StyledModal isOpen={this.props.isOpen} onRequestClose={this.props.onClose}>
                <Header>
                    <HeaderTitle>Gradient</HeaderTitle>
                    <CloseButton onClick={this.props.onClose} />
                </Header>
                <Main>
                    <Div>
                        <Label>4 params</Label>
                        <Input onChange={this.handleInputChange} name="params" type="text" value={this.state.params} />
                    </Div>
                    <Button onClick={this.handleCreateRequest}>Apply</Button>
                </Main>
            </StyledModal>
        );
    }
}

export default GradientFilterModal;
