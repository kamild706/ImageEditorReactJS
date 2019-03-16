import React, { Component } from 'react';
import { Wrapper } from './elements';
import SplitPane from 'react-split-pane';
import {
    MainBlock,
    EditorBlock,
    OpenFiles,
    ImageArea,
    RightBar,
    Image
} from './elements';
import Toolbar from '../Toolbar';

class Editor extends Component {
    state = {
        size: 250
    };

    componentDidMount() {
        window.addEventListener('resize', this.resize, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize, false);
    }

    resize = event => {
        console.log(event);
        // this.setState({
        //     size: this.state.size
        // });
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
                    <Toolbar />
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
                                    <Image />
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
