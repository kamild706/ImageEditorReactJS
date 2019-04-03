import { TYPES } from "../actions";

const image = (state = {}, action) => {
    switch (action.type) {
        case TYPES.CREATE_NEW_IMAGE:
            return {
                id: action.createdAt,
                width: action.width,
                height: action.height,
                layers: [
                    {
                        id: action.createdAt,
                        contents: null
                    }
                ]
            };
        case TYPES.RECEIVE_IMAGE:
            return {
                id: action.createdAt,
                width: action.width,
                height: action.height,
                layers: [
                    {
                        id: action.createdAt,
                        contents: action.contents
                    }
                ]
            };
        default:
            return state;
    }
};

export default image;
