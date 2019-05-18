import { combineReducers } from "redux";
import image from "./image";
import selectedTool from "./selectedTool";
import color from "./color";
import backup from "./backup";

export default combineReducers({
    image,
    selectedTool,
    color,
    backup
});
