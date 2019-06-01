import { connect } from "react-redux";
import { restoreOriginalImage } from "../actions";
import Image from "../components/Menubar/Menus/Image";

export default connect(
    null,
    { restoreOriginalImage }
)(Image);
