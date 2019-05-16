import React, { Component } from "react";
import MenuItem from "../MenuItem";
import SubMenuItem from "../SubMenuItem";

export default class Image extends Component {
    rotateCW = () => {
        const canvas = document.getElementById("canvas0");
        const ctx = canvas.getContext("2d");
        let { width, height, parentElement } = canvas;

        console.log("fddsf");
        const imageData = new Image();
        imageData.src = canvas.toDataURL();
        imageData.onload = function() {
            parentElement.height = width;
            parentElement.width = height;
            canvas.width = height;
            canvas.height = width;
            width = canvas.width;
            height = canvas.height;
            ctx.save();
            ctx.translate(width, height / width);
            ctx.rotate(Math.PI / 2);
            ctx.drawImage(imageData, 0, 0);
            ctx.restore();

            console.log("fddsf");
        };
    };
    render() {
        return (
            <MenuItem name="Image">
                <SubMenuItem name="Transform">
                    <SubMenuItem name="Rotate 90° CW" onClick={this.rotateCW} />
                    <SubMenuItem name="Rotate 90° CCW" />
                    <SubMenuItem name="Rotate 180°" />
                    <SubMenuItem name="Flip horizontally" />
                    <SubMenuItem name="Flip Vertically" />
                </SubMenuItem>
            </MenuItem>
        );
    }
}
