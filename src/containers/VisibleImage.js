import { connect } from 'react-redux';
import { Image } from '../components/Image';

const mapStateToProps = state => ({
    width: state.image.width,
    height: state.image.height,
    layers: state.image.layers
});

export default connect(mapStateToProps)(Image);
