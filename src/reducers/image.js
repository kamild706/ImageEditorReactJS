import { TYPES } from "../actions";

const image = (state = {}, action) => {
    switch (action.type) {
        case TYPES.CREATE_NEW_IMAGE:
            return {
                id: action.createdAt,
                databaseId: null,
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
                databaseId: null,
                width: action.width,
                height: action.height,
                layers: [
                    {
                        id: action.createdAt,
                        contents: action.contents
                    }
                ]
            };
        case TYPES.UPDATE_IMAGE_CONTENTS:
            return {
                ...state,
                id: action.createdAt,
                layers: [
                    {
                        id: action.createdAt,
                        contents: `data:image/png;base64,${action.contents}`
                    }
                ]
            };
        case TYPES.UPDATE_IMAGE_ID:
            return {
                ...state,
                databaseId: action.id
            };
        default:
            return state;
    }
};

export default image;
