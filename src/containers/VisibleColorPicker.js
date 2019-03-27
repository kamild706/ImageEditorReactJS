import { connect } from 'react-redux';
import { selectColor } from '../actions';
import ColorPicker from '../components/ColorPicker';

const mapStateToProps = state => ({
    color: state.color
});

const mapDispatchToProps = dispatch => ({
    selectColor: color => dispatch(selectColor(color))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorPicker);
