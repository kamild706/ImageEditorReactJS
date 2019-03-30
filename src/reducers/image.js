import { TYPES } from '../actions';

const image = (state = {}, action) => {
    switch (action.type) {
        case TYPES.CREATE_NEW_IMAGE:
            return {
                id: new Date().getTime(),
                width: action.width,
                height: action.height,
                layers: [
                    {
                        id: new Date().getTime(),
                        contents: null
                    }
                ]
            };
        case TYPES.LOAD_IMAGE_FROM_LOCAL_FILE:
            return {
                id: new Date().getTime(),
                width: action.width,
                height: action.height,
                layers: [
                    {
                        id: new Date().getTime(),
                        contents: action.contents
                    }
                ]
            };
        default:
            return state;
    }
};

export default image;
