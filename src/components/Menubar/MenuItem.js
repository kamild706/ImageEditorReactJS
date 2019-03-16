import React, { Component } from 'react';
import { StyledMenuItem, DropdownList } from './elements';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.menuItem = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleMouseDown, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleMouseDown, false);
    }

    handleMouseDown = event => {
        if (event.target === event.currentTarget) {
            this.setState({
                open: !this.state.open
            });
        } else if (!this.menuItem.current.contains(event.target)) {
            this.setState({
                open: false
            });
        }
    };

    handleClick = event => {
        if (event.target === event.currentTarget) {
            this.setState({
                open: !this.state.open
            });
        } else if (!this.menuItem.current.contains(event.target)) {
            this.setState({
                open: false
            });
        } else {
            setTimeout(this.closeMenu, 100);
        }
    };

    closeMenu = () => {
        this.setState({
            open: false
        });
    };

    render() {
        return (
            <StyledMenuItem ref={this.menuItem} onClick={this.handleClick}>
                {this.props.name}
                {this.state.open && this.props.children && (
                    <DropdownList>{this.props.children}</DropdownList>
                )}
            </StyledMenuItem>
        );
    }
}

export default MenuItem;
