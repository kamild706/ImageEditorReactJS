import { connect } from 'react-redux';
import { CanvasLayer } from '../components/CanvasLayer';

const mapStateToProps = state => ({
    tool: state.selectedTool
});

export default connect(mapStateToProps)(CanvasLayer);
