import { connect } from 'react-redux';
import { createNewImage } from '../actions';
import File from '../components/Menubar/Menus/File';

const mapDispatchToProps = dispatch => ({
    createNewImage: (width, height) => dispatch(createNewImage(width, height))
});

export default connect(
    null,
    mapDispatchToProps
)(File);
