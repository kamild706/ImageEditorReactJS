import { connect } from 'react-redux';
import { selectTool } from '../actions';
import Toolbar from '../components/Toolbar';

const mapStateToProps = state => ({
    selectedTool: state.selectedTool
});

const mapDispatchToProps = dispatch => ({
    selectTool: toolType => dispatch(selectTool(toolType))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar);
