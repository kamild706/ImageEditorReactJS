import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {
    Header,
    Label,
    Input,
    Button,
    StyledModal,
    Main,
    Div,
    HeaderTitle,
    CloseButton
} from './elements';

ReactModal.setAppElement('#root');

class NewFileModal extends Component {
    render() {
        return (
            <StyledModal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onClose}
            >
                <Header>
                    <HeaderTitle>New File</HeaderTitle>
                    <CloseButton onClick={this.props.onClose} />
                </Header>
                <Main>
                    <Div>
                        <Label>Width</Label>
                        <Input type="text" value="800" />
                        {' px'}
                    </Div>
                    <Div>
                        <Label>Height</Label>
                        <Input type="text" value="600" />
                        {' px'}
                    </Div>
                    <Button onClick={this.props.onClose}>Create</Button>
                </Main>
            </StyledModal>
        );
    }
}

export default NewFileModal;
