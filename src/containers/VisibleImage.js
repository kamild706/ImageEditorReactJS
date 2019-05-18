import { connect } from "react-redux";
import { Image } from "../components/Image";

const mapStateToProps = state => {
    let {
        backup: { current, images }
    } = state;
    let image = current !== null ? images[current] : {};
    return {
        id: image.id,
        width: image.width,
        height: image.height,
        layers: image.layers
    };
};

export default connect(mapStateToProps)(Image);
