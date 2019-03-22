import { combineReducers } from 'redux';
import image from './image';
import selectedTool from './selectedTool';

export default combineReducers({
    image,
    selectedTool
});
