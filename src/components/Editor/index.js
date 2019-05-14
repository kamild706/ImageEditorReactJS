import React, { Component } from "react";
import { Wrapper } from "./elements";
import SplitPane from "react-split-pane";
import {
    MainBlock,
    EditorBlock,
    OpenFiles,
    ImageArea,
    RightBar
} from "./elements";
import VisibleImage from "../../containers/VisibleImage";
import ClickableToolbar from "../../containers/ClickableToolbar";
import { TOOL_TYPES } from "../../actions";
export let scale = 1;
let startX = 0;
class Editor extends Component {
    state = {
        size: 350
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

    toggleZooming = isEnable => {
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
            console.log("hreeerer");
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
        const {
            scrollLeft,
            scrollTop,
            clientX,
            clientY,
            isScrolling,
            isZooming
        } = this.state;
        if (isScrolling) {
            console.log("dfsddsdfs");
            this.editorRef.scrollLeft = scrollLeft + (clientX - event.clientX);
            this.editorRef.scrollTop = scrollTop + (clientY - event.clientY);
        }
        if (isZooming) {
            console.log("xds");
            let distance = event.clientX - clientX;
            let factor = 1000;
            if (event.clientX > clientX) {
                if (distance > startX) scale += distance / factor;
                if (distance < startX) scale -= distance / factor;
            } else {
                if (distance > startX) scale -= distance / factor;
                if (distance < startX) scale += distance / factor;
            }
            startX = distance;
            console.log("scale", scale);
            const canvas = document.getElementById("canvas0");
            let { parentElement } = canvas;
            const width = Number(parentElement.attributes[0].nodeValue);
            const height = Number(parentElement.attributes[1].nodeValue);
            parentElement.style.height = `${height * scale}px`;
            parentElement.style.width = `${width * scale}px`;
            canvas.style.height = `${height * scale}px`;
            canvas.style.width = `${width * scale}px`;
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
        this.toggleScrolling(
            tool &&
                (tool.name === TOOL_TYPES.HAND_TOOL ||
                    tool.name === TOOL_TYPES.ZOOM_TOOL)
        );
    }

    componentDidUpdate() {
        const { tool } = this.props;
        this.toggleScrolling(
            tool &&
                (tool.name === TOOL_TYPES.HAND_TOOL ||
                    tool.name === TOOL_TYPES.ZOOM_TOOL)
        );
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize, false);
        this.toggleScrolling(false);
    }

    resize = event => {
        this.forceUpdate();
    };

    render() {
        return (
            <Wrapper>
                <SplitPane
                    split="vertical"
                    defaultSize={40}
                    minSize={40}
                    maxSize={80}
                    step={40}
                >
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
                                <ImageArea
                                    id="editor"
                                    tool={this.props.tool}
                                    ref={node => (this.editorRef = node)}
                                >
                                    <VisibleImage />
                                </ImageArea>
                            </EditorBlock>
                            <RightBar />
                        </SplitPane>
                    </MainBlock>
                </SplitPane>
            </Wrapper>
        );
    }
}

export default Editor;
