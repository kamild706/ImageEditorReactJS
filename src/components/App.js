import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import VisibleEditor from "../containers/VisibleEditor";

const blackTheme = {
    header: {
        color: "white",
        backgroundColor: "#474747"
    },
    menubar: {
        borderBottomColor: "black",
        UlBackgroundColor: "transparent",
        UlColor: "white"
    },
    menuItem: {
        backgroundColor: "#222",
        dropdown: {
            backgroundColor: "white",
            hoverBackgroundColor: "#5194ff",
            dropdown: "grey"
        },
        nestedDropdown: {
            backgroundColor: "white",
            borderLeft: "#222"
        }
    },
    toolbar: {
        borderTopColor: "#222",
        backgroundColor: "#474747",
        button: {
            backgroundColor: "transparent",
            color: "white",
            hoverBackgroundColor: "#222"
        }
    },
    editor: {
        resizerColor: "#222"
    },
    rightbar: {
        borderTopColor: "#222",
        backgroundColor: "#474747"
    },
    openfiles: {
        backgroundColor: "#303030"
    },
    imagearea: {
        backgroundColor: "#252525"
    },
    image: {
        defaultColor: "white"
    },
    modalDialog: {
        backgroundColor: "#474747",
        inputBackgroundColor: "#252525",
        buttonBackgroundColor: "#606060"
    },
    toolDetails: {
        textColor: "white",
        button: {
            backgroundColor: "initial"
        },
        input: {
            backgroundColor: "#222"
        },
        sizePicker: {
            backgroundColor: "#474747",
            borderColor: "#222"
        }
    },
    colorPicker: {
        selectedColorBackground: "#252525"
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
        overflow: hidden;
    }
    
    #cropArea {
        border: 2px dashed white;
        width: 200px;
        height: 200px;
        background-color: transparent;
        position: absolute;
        top: 500px;
        left: 500px;
          
        display: flex;
        flex-direction: column;
          justify-content: space-between;
        }
        
        #cropArea > div > div {
          width: 7px;
          height: 7px;
          background-color: white;
          margin-bottom: -4px;
          margin-left: -4px;
          margin-right: -4px;
          margin-top: -4px;
        }
        
        #cropArea > div {
          display: flex;
          justify-content: space-between;
        }
        
        #topRight:hover, #bottomLeft:hover {
          cursor: nesw-resize;
        }
        
        
        #topLeft:hover, #bottomRight:hover {
          cursor: nwse-resize;
        }
        
        #cropArea:hover {
          cursor: move;
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
                        <VisibleEditor />
                    </>
                </ThemeProvider>
            </>
        );
    }
}

export default App;
