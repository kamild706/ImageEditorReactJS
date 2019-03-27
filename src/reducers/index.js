import { combineReducers } from 'redux';
import image from './image';
import selectedTool from './selectedTool';
import color from './color';

export default combineReducers({
    image,
    selectedTool,
    color
});
