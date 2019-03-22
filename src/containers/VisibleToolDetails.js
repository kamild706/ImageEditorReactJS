import { connect } from 'react-redux';
import ToolDetails from '../components/ToolDetails';

const mapStateToProps = state => ({
    selectedTool: state.selectedTool
});

export default connect(mapStateToProps)(ToolDetails);
