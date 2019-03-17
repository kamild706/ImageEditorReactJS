import { TYPES } from '../actions';

const image = (state = {}, action) => {
    switch (action.type) {
        case TYPES.CREATE_NEW_IMAGE:
            return {
                width: action.width,
                height: action.height,
                layers: [
                    {
                        contents: null
                    }
                ]
            };
        case TYPES.LOAD_IMAGE_FROM_LOCAL_FILE:
            return {
                width: action.width,
                height: action.height,
                layers: [
                    {
                        contents: action.contents
                    }
                ]
            };
        default:
            return state;
    }
};

export default image;
