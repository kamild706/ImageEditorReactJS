import { connect } from "react-redux";
import { applyFilter } from "../actions";
import Filter from "../components/Menubar/Menus/Filter";

export default connect(
    null,
    { applyFilter }
)(Filter);
