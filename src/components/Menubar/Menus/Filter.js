import React, { Component } from 'react';
import MenuItem from '../MenuItem';
import SubMenuItem from '../SubMenuItem';

export default class Filter extends Component {
    render() {
        return (
            <MenuItem name="Filter">
                <SubMenuItem name="Liquify" />
                <SubMenuItem name="Blur">
                    <SubMenuItem name="Average" />
                    <SubMenuItem name="Blur" />
                    <SubMenuItem name="Box Blur" />
                    <SubMenuItem name="Gaussian Blur" />
                    <SubMenuItem name="Motion Blur" />
                    <SubMenuItem name="Radial Blur" />
                </SubMenuItem>
                <SubMenuItem name="Distort">
                    <SubMenuItem name="Displace" />
                    <SubMenuItem name="Pinch" />
                    <SubMenuItem name="Polar Coordinates" />
                    <SubMenuItem name="Ripple" />
                    <SubMenuItem name="Shear" />
                </SubMenuItem>
                <SubMenuItem name="Noise">
                    <SubMenuItem name="Add Noise" />
                    <SubMenuItem name="Dust &amp; Scratches" />
                    <SubMenuItem name="Median" />
                </SubMenuItem>
                <SubMenuItem name="Pixelate">
                    <SubMenuItem name="Color Halftone" />
                    <SubMenuItem name="Mosaic" />
                </SubMenuItem>
                <SubMenuItem name="Render">
                    <SubMenuItem name="Clouds" />
                    <SubMenuItem name="Difference Clouds" />
                </SubMenuItem>
                <SubMenuItem name="Sharpen">
                    <SubMenuItem name="Sharpen" />
                    <SubMenuItem name="Sharpen More" />
                    <SubMenuItem name="Unsharp Mask" />
                </SubMenuItem>
                <SubMenuItem name="Stylize">
                    <SubMenuItem name="Find Edges" />
                </SubMenuItem>
                <SubMenuItem name="Other">
                    <SubMenuItem name="High Pass" />
                    <SubMenuItem name="Maximum" />
                    <SubMenuItem name="Minimum" />
                    <SubMenuItem name="offset" />
                    <SubMenuItem name="Repeat" />
                </SubMenuItem>
            </MenuItem>
        );
    }
}
