import React, { Component } from "react";
import MenuItem from "../MenuItem";
import SubMenuItem from "../SubMenuItem";

export default class Filter extends Component {
    getImageData = () => {
        const canvas = document.getElementById("canvas0");
        const data = canvas.toDataURL();
        const index = data.indexOf("base64");
        return data.substring(index + 7);
    };

    render() {
        const { applyFilter } = this.props;
        return (
            <MenuItem name="Filter">
                <SubMenuItem name="Gradient">
                    <SubMenuItem name="Linear" />
                    <SubMenuItem name="Radial" />
                </SubMenuItem>
                <SubMenuItem name="KMM" onClick={() => applyFilter(this.getImageData(), "kmm")} />
                <SubMenuItem name="Distort" onClick={() => applyFilter(this.getImageData(), "distort")} />
                <SubMenuItem name="Histogram" />
                <SubMenuItem name="Black White" onClick={() => applyFilter(this.getImageData(), "blackwhite")} />
                <SubMenuItem name="Blend" />
                <SubMenuItem name="Half blend" />
                <SubMenuItem name="Min RGB" onClick={() => applyFilter(this.getImageData(), "minrgb")} />
                <SubMenuItem name="Median" />
                <SubMenuItem name="Convolution" />
                <SubMenuItem name="Pixelate" />
            </MenuItem>
        );
    }
}
