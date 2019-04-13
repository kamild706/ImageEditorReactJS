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

class Editor extends Component {
    state = {
        size: 350
    };

    toggleScrolling = isEnable => {
        console.debug("toggleScrolling", "enabled: ", isEnable);
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
        const { scrollLeft, scrollTop } = this.editorRef;
        const { clientX, clientY } = event;
        this.setState({
            isScrolling: true,
            scrollLeft,
            scrollTop,
            clientX,
            clientY
        });
    };

    onMouseMove = event => {
        const {
            scrollLeft,
            scrollTop,
            clientX,
            clientY,
            isScrolling
        } = this.state;
        if (isScrolling) {
            this.editorRef.scrollLeft = scrollLeft + (clientX - event.clientX);
            this.editorRef.scrollTop = scrollTop + (clientY - event.clientY);
        }
    };

    onMouseUp = event => {
        this.setState({
            isScrolling: false
        });
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize, false);
        const { tool } = this.props;
        this.toggleScrolling(tool && tool.name === TOOL_TYPES.HAND_TOOL);
    }

    componentDidUpdate() {
        const { tool } = this.props;
        this.toggleScrolling(tool && tool.name === TOOL_TYPES.HAND_TOOL);
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
