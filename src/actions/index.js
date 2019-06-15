const SERVER_URL = "https://localhost:44300";

export const TYPES = {
    CREATE_NEW_IMAGE: "CREATE_NEW_IMAGE",
    RECEIVE_IMAGE: "RECEIVE_IMAGE",
    SELECT_TOOL: "SELECT_TOOL",
    SELECT_COLOR: "SELECT_COLOR",
    UPDATE_IMAGE_CONTENTS: "UPDATE_IMAGE_CONTENTS",
    UPDATE_IMAGE_ID: "UPDATE_IMAGE_ID",
    BACKUP_IMAGE: "BACKUP_IMAGE",
    BACKUP_MOVE_BACK: "BACKUP_MOVE_BACK",
    BACKUP_MOVE_FORWARD: "BACKUP_MOVE_FORWARD",
    BACKUP_RESTORE_ORIGINAL: "BACKUP_RESTORE_ORIGINAL"
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
            dispatch(backupCurrentImage());
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
                dispatch(backupCurrentImage());
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

const updateImageContents = contents => ({
    type: TYPES.UPDATE_IMAGE_CONTENTS,
    contents,
    createdAt: new Date().getTime()
});

const updateImageId = id => ({
    type: TYPES.UPDATE_IMAGE_ID,
    id
});

const backupCurrentImage = () => (dispatch, getState) => {
    const { image } = getState();
    dispatch({
        type: TYPES.BACKUP_IMAGE,
        image,
        createdAt: new Date().getTime()
    });
};

export const moveToPreviousImage = () => (dispatch, getState) => {
    const { backup } = getState();
    if (backup.current > 0) {
        dispatch({ type: TYPES.BACKUP_MOVE_BACK });
    }
};

export const restoreOriginalImage = () => (dispatch, getState) => {
    const { backup } = getState();
    if (backup.current > 0) {
        dispatch({ type: TYPES.BACKUP_RESTORE_ORIGINAL });
    }
};

export const moveToNextImage = () => (dispatch, getState) => {
    const { backup } = getState();
    if (backup.current + 1 < backup.images.length) {
        dispatch({ type: TYPES.BACKUP_MOVE_FORWARD });
    }
};

export const selectTool = toolType => ({
    type: TYPES.SELECT_TOOL,
    toolType
});

export const selectColor = color => ({
    type: TYPES.SELECT_COLOR,
    color
});

const applyFilterRequest = (imgId, filterURL, body = {}) => {
    body.pictureId = imgId;
    return fetch(`${SERVER_URL}/manipulations/${filterURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
};

export const applyFilter = (imgData, filterURL, params = {}) => (dispatch, getState) => {
    const { image } = getState();
    const { databaseId: id } = image;
    if (id) {
        updateImageOnServer(id, imgData).then(() => {
            applyFilterRequest(id, filterURL, params)
                .then(response => response.text())
                .then(contents => {
                    dispatch(backupCurrentImage());
                    dispatch(updateImageContents(contents));
                    dispatch(backupCurrentImage());
                });
        });
    } else {
        saveImageOnServer(new Date().getMilliseconds(), imgData, "image/png").then(id => {
            applyFilterRequest(id, filterURL, params)
                .then(response => response.text())
                .then(contents => {
                    dispatch(updateImageId(id));
                    dispatch(backupCurrentImage());
                    dispatch(updateImageContents(contents));
                    dispatch(backupCurrentImage());
                });
        });
    }
};

const updateImageOnServer = (id, image) => {
    return fetch(`${SERVER_URL}/pictures/edit/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Base64: image
        })
    });
};

const saveImageOnServer = (filename, image, type) => {
    return fetch(`${SERVER_URL}/pictures/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            FileName: filename,
            FileType: type,
            Base64: image
        })
    }).then(response => response.text());
};
