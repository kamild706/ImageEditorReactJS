export const TYPES = {
    CREATE_NEW_IMAGE: 'CREATE_NEW_IMAGE',
    LOAD_IMAGE_FROM_LOCAL_FILE: 'LOAD_IMAGE_FROM_LOCAL_FILE'
};

export const createNewImage = (width, height) => ({
    type: TYPES.CREATE_NEW_IMAGE,
    width,
    height
});

export const loadImageFromLocalFile = (contents, width, height) => ({
    type: TYPES.LOAD_IMAGE_FROM_LOCAL_FILE,
    contents,
    width,
    height
});
