import React, { Component } from 'react';
import MenuItem from '../MenuItem';
import SubMenuItem from '../SubMenuItem';
import NewFileModal from '../Modals/NewFileModal';

export default class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFileModalOpen: false
        };
    }

    openModal = (modalName, flag) => {
        const propName = `${modalName}Open`;
        this.setState({
            [propName]: flag
        });
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
                        <SubMenuItem name="From disk" />
                    </SubMenuItem>
                    <SubMenuItem name="Save" />
                </MenuItem>
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
