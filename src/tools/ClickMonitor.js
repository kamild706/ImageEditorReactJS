class ClickMonitor {
    leftButtonPressed = false;

    onButtonPressed = event => {
        if (event.button === 0) this.leftButtonPressed = true;
    };

    onButtonReleased = event => {
        if (event.button === 0) this.leftButtonPressed = false;
    };
}

const instance = new ClickMonitor();
export default instance;
