import { connect } from "react-redux";
import { createNewImage, loadImageFromLocalFile, fetchImage } from "../actions";
import File from "../components/Menubar/Menus/File";

const mapDispatchToProps = dispatch => ({
    createNewImage: (width, height) => dispatch(createNewImage(width, height)),
    fetchImage: url => dispatch(fetchImage(url)),
    loadImageFromLocalFile: (contents, width, height) =>
        dispatch(loadImageFromLocalFile(contents, width, height))
});

export default connect(
    null,
    mapDispatchToProps
)(File);
