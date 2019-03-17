import React, { Component } from 'react';
import MenuItem from '../MenuItem';
import SubMenuItem from '../SubMenuItem';
import NewFileModal from '../Modals/NewFileModal';
import { LocalFilePicker } from './elements';

export default class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFileModalOpen: false
        };

        this.localFilePicker = React.createRef();
    }

    openModal = (modalName, flag) => {
        const propName = `${modalName}Open`;
        this.setState({
            [propName]: flag
        });
    };

    loadLocalFile = event => {
        const file = this.localFilePicker.current.files[0];
        const reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
        }

        reader.addEventListener('load', () => {
            const image = new Image();
            image.src = reader.result;
            image.onload = () => {
                this.props.loadImageFromLocalFile(
                    reader.result,
                    image.width,
                    image.height
                );
            };
        });
    };

    openLocalFilePicker = event => {
        this.localFilePicker.current.click();
    };

    render() {
        return (
            <>
                <MenuItem name="File">
                    <SubMenuItem
                        name="New"
                        onClick={e => this.openModal('newFileModal', true)}
                    />
                    <SubMenuItem name="Open">
                        <SubMenuItem name="From URL" />
                        <SubMenuItem
                            name="From disk"
                            onClick={this.openLocalFilePicker}
                        />
                    </SubMenuItem>
                    <SubMenuItem name="Save" />
                </MenuItem>
                <LocalFilePicker
                    ref={this.localFilePicker}
                    onChange={this.loadLocalFile}
                />
                {this.state.newFileModalOpen ? (
                    <NewFileModal
                        onClose={e => this.openModal('newFileModal', false)}
                        isOpen={true}
                        onConfirm={this.props.createNewImage}
                    />
                ) : null}
            </>
        );
    }
}
