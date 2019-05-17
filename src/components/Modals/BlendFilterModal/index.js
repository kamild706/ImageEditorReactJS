import React, { Component } from "react";
import ReactModal from "react-modal";
import { Header, Input, Button, StyledModal, CloseButton, HeaderTitle, Label, Main, Div } from "../commons";

ReactModal.setAppElement("#root");

class BlendFilterModal extends Component {
    state = {
        params: "0.5"
    };

    handleCreateRequest = () => {
        let { params } = this.state;
        this.props.onConfirm({ doubleparams: [Number(params)] });
        this.props.onClose();
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { isOpen, onClose, title } = this.props;
        return (
            <StyledModal isOpen={isOpen} onRequestClose={onClose}>
                <Header>
                    <HeaderTitle>{title ? title : "Blend"}</HeaderTitle>
                    <CloseButton onClick={onClose} />
                </Header>
                <Main>
                    <Div>
                        <Label>Strength</Label>
                        <Input onChange={this.handleInputChange} name="params" type="text" value={this.state.params} />
                    </Div>
                    <Button onClick={this.handleCreateRequest}>Apply</Button>
                </Main>
            </StyledModal>
        );
    }
}

export default BlendFilterModal;
