import React, { Component } from 'react';
import { Wrapper } from './elements';
import SplitPane from 'react-split-pane';
import {
    MainBlock,
    EditorBlock,
    OpenFiles,
    ImageArea,
    RightBar
} from './elements';
import VisibleImage from '../../containers/VisibleImage';
import ClickableToolbar from '../../containers/ClickableToolbar';

class Editor extends Component {
    state = {
        size: 350
    };

    componentDidMount() {
        window.addEventListener('resize', this.resize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize, false);
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
                                <ImageArea>
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
