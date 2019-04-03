export const TYPES = {
    CREATE_NEW_IMAGE: "CREATE_NEW_IMAGE",
    LOAD_IMAGE_FROM_LOCAL_FILE: "LOAD_IMAGE_FROM_LOCAL_FILE",
    RECEIVE_IMAGE: "RECEIVE_IMAGE",
    SELECT_TOOL: "SELECT_TOOL",
    SELECT_COLOR: "SELECT_COLOR"
};

export const TOOL_TYPES = {
    BRUSH_TOOL: "BRUSH_TOOL"
};

export const createNewImage = (width, height) => ({
    type: TYPES.CREATE_NEW_IMAGE,
    width,
    height,
    createdAt: new Date().getTime()
});

export const loadImageFromLocalFile = file => dispatch => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
        const image = new Image();
        image.src = reader.result;
        image.onload = () => {
            dispatch(receiveImage(reader.result, image.width, image.height));
        };
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
