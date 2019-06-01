import React, { Component } from "react";
import ReactModal from "react-modal";
import { Header, Input, Button, StyledModal, CloseButton, HeaderTitle, Label, Main, Div, BlockLabel } from "../commons";

ReactModal.setAppElement("#root");

class GradientFilterModal extends Component {
    state = {
        coords1: "100 200",
        coords2: "150 140"
    };

    handleCreateRequest = () => {
        let { coords1, coords2 } = this.state;
        let arr = coords1 + " " + coords2;
        arr = arr
            .replace(/(, *)|( +)/g, " ")
            .split(" ")
            .map(num => Number(num));
        console.log(arr);
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
                        <Div>
                            <Label>X1 Y1</Label>
                            <Input
                                onChange={this.handleInputChange}
                                name="coords1"
                                type="text"
                                value={this.state.coords1}
                            />
                        </Div>
                        <Div>
                            <Label>X2 Y2</Label>
                            <Input
                                onChange={this.handleInputChange}
                                name="coords2"
                                type="text"
                                value={this.state.coords2}
                            />
                        </Div>
                        <BlockLabel marginTop="15px">Use comma or space as separator</BlockLabel>
                    </Div>
                    <Button onClick={this.handleCreateRequest}>Apply</Button>
                </Main>
            </StyledModal>
        );
    }
}

export default GradientFilterModal;
