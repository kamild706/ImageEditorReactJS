import React, { Component } from "react";
import MenuItem from "../MenuItem";
import SubMenuItem from "../SubMenuItem";

export default class Image extends Component {
    render() {
        const { restoreOriginalImage } = this.props;
        return (
            <MenuItem name="Image">
                {/*<SubMenuItem name="Transform">
                    <SubMenuItem name="Rotate 90° CW" />
                    <SubMenuItem name="Rotate 90° CCW" />
                    <SubMenuItem name="Rotate 180°" />
                    <SubMenuItem name="Flip horizontally" />
                    <SubMenuItem name="Flip Vertically" />
                </SubMenuItem>*/}
                <SubMenuItem name="Restore original" onClick={restoreOriginalImage} />
            </MenuItem>
        );
    }
}
