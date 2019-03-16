import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Editor from './Editor';

const blackTheme = {
    header: {
        color: 'white',
        backgroundColor: '#474747'
    },
    menubar: {
        borderBottomColor: 'black',
        UlBackgroundColor: 'transparent',
        UlColor: 'white'
    },
    menuItem: {
        backgroundColor: '#222',
        dropdown: {
            backgroundColor: 'white',
            hoverBackgroundColor: '#5194ff'
        },
        nestedDropdown: {
            backgroundColor: 'white'
        }
    },
    toolbar: {
        borderTopColor: '#222',
        backgroundColor: '#474747',
        button: {
            backgroundColor: 'transparent',
            color: 'white',
            hoverBackgroundColor: '#222'
        }
    },
    editor: {
        resizerColor: '#222'
    },
    rightbar: {
        borderTopColor: '#222',
        backgroundColor: '#474747'
    },
    openfiles: {
        backgroundColor: '#303030'
    },
    imagearea: {
        backgroundColor: '#252525'
    }
};

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: ProximaNova;
        src: url("https://p32.pl/fonts/ProximaNova-Regular.otf") format("opentype");
    }

    * {
        font-family: ProximaNova, sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    #root {
        // display: flex;
        // flex-direction: column;
        overflow: hidden;
    }
`;

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <ThemeProvider theme={blackTheme}>
                    <>
                        <Header />
                        <Editor />
                    </>
                </ThemeProvider>
            </>
        );
    }
}

export default App;