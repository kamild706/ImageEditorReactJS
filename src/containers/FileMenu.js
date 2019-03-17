import { connect } from 'react-redux';
import { createNewImage, loadImageFromLocalFile } from '../actions';
import File from '../components/Menubar/Menus/File';

const mapDispatchToProps = dispatch => ({
    createNewImage: (width, height) => dispatch(createNewImage(width, height)),
    loadImageFromLocalFile: (contents, width, height) =>
        dispatch(loadImageFromLocalFile(contents, width, height))
});

export default connect(
    null,
    mapDispatchToProps
)(File);
