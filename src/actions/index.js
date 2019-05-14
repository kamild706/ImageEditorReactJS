export const TYPES = {
    CREATE_NEW_IMAGE: "CREATE_NEW_IMAGE",
    RECEIVE_IMAGE: "RECEIVE_IMAGE",
    SELECT_TOOL: "SELECT_TOOL",
    SELECT_COLOR: "SELECT_COLOR"
};

export const TOOL_TYPES = {
    BRUSH_TOOL: "BRUSH_TOOL",
    HAND_TOOL: "HAND_TOOL",
    ERASER_TOOL: "ERASER_TOOL",
    ZOOM_TOOL: "ZOOM_TOOL"
};

export const createNewImage = (width, height) => ({
    type: TYPES.CREATE_NEW_IMAGE,
    width,
    height,
    createdAt: new Date().getTime()
});

export const loadImageFromLocalFile = file => dispatch => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const image = new Image();
        image.src = reader.result;
        image.onload = () => {
            dispatch(receiveImage(reader.result, image.width, image.height));
        };
    });
    return reader.readAsDataURL(file);
};

export const fetchImage = url => dispatch => {
    return fetch(url).then(response => {
        response.blob().then(result => {
            const base64img = URL.createObjectURL(result);
            const image = new Image();
            image.src = base64img;
            image.onload = () => {
                dispatch(receiveImage(base64img, image.width, image.height));
            };
        });
    });
};

export const receiveImage = (contents, width, height) => ({
    type: TYPES.RECEIVE_IMAGE,
    contents,
    width,
    height,
    createdAt: new Date().getTime()
});

export const selectTool = toolType => ({
    type: TYPES.SELECT_TOOL,
    toolType
});

export const selectColor = color => ({
    type: TYPES.SELECT_COLOR,
    color
});
