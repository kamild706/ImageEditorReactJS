import React, { Component } from "react";
import MenuItem from "../MenuItem";
import SubMenuItem from "../SubMenuItem";
import GradientFilterModal from "../../Modals/GradientFilterModal";
import HistogramFilterModal from "../../Modals/HistogramFilterModal";
import BlendFilterModal from "../../Modals/BlendFilterModal";
import SobelFilterModal from "../../Modals/SobelFilterModal";

export default class Filter extends Component {
    state = {
        openModal: ""
    };

    openModal = modal => {
        if (typeof modal === "string") this.setState({ openModal: modal });
        else this.setState({ openModal: "" });
    };

    getImageData = () => {
        const canvas = document.getElementById("canvas0");
        const data = canvas.toDataURL();
        const index = data.indexOf("base64");
        return data.substring(index + 7);
    };

    applyFilterWithParams = filterURL => params => {
        const imageData = this.getImageData();
        this.props.applyFilter(imageData, filterURL, params);
    };

    render() {
        const { applyFilter } = this.props;
        const { openModal } = this.state;
        return (
            <>
                <MenuItem name="Filter">
                    <SubMenuItem name="Gradient">
                        <SubMenuItem name="Linear" onClick={() => this.openModal("linearGradient")} />
                        <SubMenuItem name="Radial" onClick={() => this.openModal("radialGradient")} />
                    </SubMenuItem>
                    <SubMenuItem name="KMM" onClick={() => applyFilter(this.getImageData(), "kmm")} />
                    <SubMenuItem name="Distort" onClick={() => applyFilter(this.getImageData(), "distort")} />
                    <SubMenuItem name="Histogram" onClick={() => this.openModal("histogram")} />
                    <SubMenuItem name="Black White" onClick={() => applyFilter(this.getImageData(), "blackwhite")} />
                    <SubMenuItem name="Blend" onClick={() => this.openModal("blend")} />
                    <SubMenuItem name="Half blend" onClick={() => this.openModal("halfblend")} />
                    <SubMenuItem name="Min RGB" onClick={() => applyFilter(this.getImageData(), "minrgb")} />
                    <SubMenuItem name="Median" onClick={() => applyFilter(this.getImageData(), "median")} />
                    <SubMenuItem name="Blur">
                        <SubMenuItem
                            name="Gaussian"
                            onClick={() => applyFilter(this.getImageData(), "blur/gaussian")}
                        />
                        <SubMenuItem name="Box" onClick={() => applyFilter(this.getImageData(), "blur/box")} />
                    </SubMenuItem>
                    <SubMenuItem name="Emboss" onClick={() => applyFilter(this.getImageData(), "emboss")} />
                    <SubMenuItem name="Sobel" onClick={() => this.openModal("sobel")} />
                    <SubMenuItem name="Prewitt" onClick={() => this.openModal("prewitt")} />
                    <SubMenuItem name="Pixelize" onClick={() => applyFilter(this.getImageData(), "pixelize")} />
                </MenuItem>
                {openModal.endsWith("Gradient") && (
                    <GradientFilterModal
                        onClose={() => this.openModal(false)}
                        isOpen={true}
                        onConfirm={this.applyFilterWithParams(
                            "gradient/" + openModal.substring(0, openModal.indexOf("Gradient"))
                        )}
                    />
                )}
                {openModal === "histogram" && (
                    <HistogramFilterModal
                        onClose={() => this.openModal(false)}
                        isOpen={true}
                        onConfirm={this.applyFilterWithParams("histogram")}
                    />
                )}
                {openModal === "blend" && (
                    <BlendFilterModal
                        onClose={() => this.openModal(false)}
                        isOpen={true}
                        onConfirm={this.applyFilterWithParams("blend")}
                    />
                )}
                {openModal === "halfblend" && (
                    <BlendFilterModal
                        title="Halfblend"
                        onClose={() => this.openModal(false)}
                        isOpen={true}
                        onConfirm={this.applyFilterWithParams("halfblend")}
                    />
                )}
                {openModal === "sobel" && (
                    <SobelFilterModal
                        onClose={() => this.openModal(false)}
                        isOpen={true}
                        onConfirm={this.applyFilterWithParams("sobel")}
                    />
                )}
                {openModal === "prewitt" && (
                    <SobelFilterModal
                        title="Prewitt"
                        onClose={() => this.openModal(false)}
                        isOpen={true}
                        onConfirm={this.applyFilterWithParams("prewitt")}
                    />
                )}
            </>
        );
    }
}
