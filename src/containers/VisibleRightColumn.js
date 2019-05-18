import { connect } from "react-redux";
import { moveToNextImage, moveToPreviousImage } from "../actions";
import { RightColumn } from "../components/RightColumn";

const mapStateToProps = state => ({
    current: state.backup.current,
    all: state.backup.images.length
});

export default connect(
    mapStateToProps,
    { moveToPreviousImage, moveToNextImage }
)(RightColumn);
