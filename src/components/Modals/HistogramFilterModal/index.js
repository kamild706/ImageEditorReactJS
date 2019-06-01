import React, { Component } from "react";
import ReactModal from "react-modal";
import { Header, Input, Button, StyledModal, CloseButton, HeaderTitle, Label, Main, Div, BlockLabel } from "../commons";

ReactModal.setAppElement("#root");

class HistogramFilterModal extends Component {
    state = {
        params: "100 200"
    };

    handleCreateRequest = () => {
        let { params } = this.state;
        if (params.length > 0) {
            const arr = params
                .replace(/(, *)|( +)/g, " ")
                .split(" ")
                .map(num => Number(num));
            this.props.onConfirm({ intparams: arr });
        } else {
            this.props.onConfirm();
        }

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
                    <HeaderTitle>Histogram</HeaderTitle>
                    <CloseButton onClick={this.props.onClose} />
                </Header>
                <Main>
                    <Div>
                        <Label>Min, Max</Label>
                        <Input onChange={this.handleInputChange} name="params" type="text" value={this.state.params} />
                        <BlockLabel marginTop="15px">Use comma or space as separator</BlockLabel>
                    </Div>
                    <Button onClick={this.handleCreateRequest}>Apply</Button>
                </Main>
            </StyledModal>
        );
    }
}

export default HistogramFilterModal;
