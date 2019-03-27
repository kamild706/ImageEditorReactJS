import { TYPES } from '../actions';

const color = (state = '#EEFF00', action) => {
    switch (action.type) {
        case TYPES.SELECT_COLOR:
            return action.color;
        default:
            return state;
    }
};

export default color;
