import { connect } from 'react-redux';
import ProductList from "./ProductList";
import { selectResult } from '../features/products/productSlice';


const mapStateToProps = (state, ownProps) => ({
    result: selectResult(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);