import { connect } from "react-redux";
import Editor from "../components/Editor";

const mapStateToProps = state => ({
    tool: state.selectedTool
});

export default connect(mapStateToProps)(Editor);
