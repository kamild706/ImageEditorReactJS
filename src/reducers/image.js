import { TYPES } from '../actions';

const image = (state = {}, action) => {
    switch (action.type) {
        case TYPES.CREATE_NEW_IMAGE:
            return {
                width: action.width,
                height: action.height,
                layers: [
                    {
                        contents: ''
                    }
                ]
            };
        default:
            return state;
    }
};

export default image;
