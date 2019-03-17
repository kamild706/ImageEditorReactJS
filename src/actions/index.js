export const TYPES = {
    CREATE_NEW_IMAGE: 'CREATE_NEW_IMAGE'
};

export const createNewImage = (width, height) => ({
    type: TYPES.CREATE_NEW_IMAGE,
    width,
    height
});
