import React, { Component } from 'react';
import { DropdownItem, NestedDropdownList } from './elements';

class SubMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    toggleSubMenu = (event, flag) => {
        this.setState({
            open: flag
        });
    };

    render() {
        return (
            <DropdownItem
                onClick={this.props.onClick}
                onMouseLeave={e => this.toggleSubMenu(e, false)}
                onMouseEnter={e => this.toggleSubMenu(e, true)}
            >
                <span>{this.props.name}</span>
                {this.props.children && (
                    <>
                        <span>▶</span>
                        {this.state.open && (
                            <NestedDropdownList>
                                {this.props.children}
                            </NestedDropdownList>
                        )}
                    </>
                )}
            </DropdownItem>
        );
    }
}

export default SubMenuItem;
