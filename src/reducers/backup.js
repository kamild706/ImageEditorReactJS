import { TYPES } from "../actions";

const initialState = {
    images: [],
    current: null
};

const backup = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.CREATE_NEW_IMAGE:
        case TYPES.RECEIVE_IMAGE:
            return initialState;
        case TYPES.IMAGE_BACKUP:
            const images = [...state.images, { ...action.image, id: action.createdAt }];
            return {
                images,
                current: images.length - 1
            };
        case TYPES.BACKUP_MOVE_BACK:
            return {
                ...state,
                current: state.current - 1
            };
        case TYPES.BACKUP_MOVE_FORWARD:
            return {
                ...state,
                current: state.current + 1
            };
        case TYPES.BACKUP_RESTORE_ORIGINAL:
            return {
                ...state,
                current: 0
            };
        default:
            return state;
    }
};

export default backup;
