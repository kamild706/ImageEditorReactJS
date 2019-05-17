import React, { Component } from "react";
import ReactModal from "react-modal";
import { Header, Input, Button, StyledModal, CloseButton, HeaderTitle, Label, Div, Main } from "../commons";

ReactModal.setAppElement("#root");

class LocalFromUrlModel extends Component {
    state = {
        url: ""
    };

    handleLoadRequest = () => {
        let { url } = this.state;
        this.props.onConfirm(url);
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
                    <HeaderTitle>Load Image</HeaderTitle>
                    <CloseButton onClick={this.props.onClose} />
                </Header>
                <Main height="5rem">
                    <Div>
                        <Label>URL</Label>
                        <Input onChange={this.handleInputChange} name="url" type="text" value={this.state.url} />
                    </Div>
                    <Button onClick={this.handleLoadRequest}>Load</Button>
                </Main>
            </StyledModal>
        );
    }
}

export default LocalFromUrlModel;
