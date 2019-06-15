import React, { Component } from "react";
import { Wrapper } from "./elements";
import SplitPane from "react-split-pane";
import { MainBlock, EditorBlock, OpenFiles, ImageArea } from "./elements";
import VisibleImage from "../../containers/VisibleImage";
import ClickableToolbar from "../../containers/ClickableToolbar";
import { TOOL_TYPES } from "../../actions";
import VisibleRightColumn from "../../containers/VisibleRightColumn";
export let scale = 1;
let rotatedBy90degs = false;
let startX = 0;

export function toggleRotatedBy90degs() {
    rotatedBy90degs = !rotatedBy90degs;
}

export function resetScale() {
    scale = 1;
}

class Editor extends Component {
    state = {
        size: 350
    };

    static resizeCanvas = canvas => {
        const { width, height } = canvas;

        const scaledWidth = `${width * scale}px`;
        const scaledHeight = `${height * scale}px`;

        canvas.style.width = scaledWidth;
        canvas.style.height = scaledHeight;
        canvas.parentElement.style.width = scaledWidth;
        canvas.parentElement.style.height = scaledHeight;
    };

    toggleScrolling = isEnable => {
        if (isEnable) {
            this.editorRef.addEventListener("mousedown", this.onMouseDown);
            this.editorRef.addEventListener("mouseup", this.onMouseUp);
            this.editorRef.addEventListener("mousemove", this.onMouseMove);
        } else {
            this.editorRef.removeEventListener("mousedown", this.onMouseDown);
            this.editorRef.removeEventListener("mouseup", this.onMouseUp);
            this.editorRef.removeEventListener("mousemove", this.onMouseMove);
        }
    };

    onMouseDown = event => {
        const { clientX, clientY } = event;
        const { tool } = this.props;
        if (tool.name === TOOL_TYPES.HAND_TOOL) {
            const { scrollLeft, scrollTop } = this.editorRef;
            this.setState({
                isScrolling: true,
                scrollLeft,
                scrollTop,
                clientX,
                clientY
            });
        }
        if (tool.name === TOOL_TYPES.ZOOM_TOOL) {
            this.setState({
                isZooming: true,
                clientX
            });
        }
    };

    onMouseMove = event => {
        const { scrollLeft, scrollTop, clientX, clientY, isScrolling, isZooming } = this.state;
        if (isScrolling) {
            this.editorRef.scrollLeft = scrollLeft + (clientX - event.clientX);
            this.editorRef.scrollTop = scrollTop + (clientY - event.clientY);
        }
        if (isZooming) {
            let distance = event.clientX - clientX;
            let factor = 1000;
            let change = distance / factor;
            if (event.clientX > clientX) {
                if (distance > startX) scale += change;
                if (distance < startX) scale -= change;
            } else {
                if (distance > startX) scale -= change;
                if (distance < startX) scale += change;
            }
            startX = distance;

            const canvas = document.getElementById("canvas0");
            Editor.resizeCanvas(canvas);
        }
    };

    onMouseUp = event => {
        this.setState({
            isScrolling: false,
            isZooming: false
        });
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize, false);
        const { tool } = this.props;
        this.toggleScrolling(tool && (tool.name === TOOL_TYPES.HAND_TOOL || tool.name === TOOL_TYPES.ZOOM_TOOL));
    }

    componentDidUpdate() {
        const { tool } = this.props;
        this.toggleScrolling(tool && (tool.name === TOOL_TYPES.HAND_TOOL || tool.name === TOOL_TYPES.ZOOM_TOOL));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize, false);
        this.toggleScrolling(false);
    }

    resize = event => {
        this.forceUpdate();
    };

    resizeEditor = (imgWidth, imgHeight) => {
        setTimeout(() => {
            let windowWidth = this.editorRef.parentElement.parentElement.style.width;
            windowWidth = windowWidth.substring(0, windowWidth.length - 2);
            let widthScale = (Number(windowWidth) / imgWidth) * 0.9;

            let windowHeight = this.editorRef.parentElement.parentElement.clientHeight;
            let heightScale = (Number(windowHeight) / imgHeight) * 0.9;

            scale = Math.min(widthScale, heightScale);

            const canvas = document.getElementById("canvas0");
            Editor.resizeCanvas(canvas);
            console.log(scale);
        }, 100);
    };

    render() {
        return (
            <Wrapper>
                <SplitPane split="vertical" defaultSize={40} minSize={40} maxSize={80} step={40}>
                    <ClickableToolbar />
                    <MainBlock>
                        <SplitPane
                            split="vertical"
                            size={window.innerWidth - this.state.size}
                            onChange={size =>
                                this.setState({
                                    size: window.innerWidth - size
                                })
                            }
                        >
                            <EditorBlock>
                                <OpenFiles />
                                <ImageArea id="editor" tool={this.props.tool} ref={node => (this.editorRef = node)}>
                                    <VisibleImage onImageLoaded={this.resizeEditor} />
                                </ImageArea>
                            </EditorBlock>
                            <VisibleRightColumn />
                        </SplitPane>
                    </MainBlock>
                </SplitPane>
            </Wrapper>
        );
    }
}

export default Editor;
