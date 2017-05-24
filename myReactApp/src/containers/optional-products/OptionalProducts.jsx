import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchOptionalProducts} from './actions';
import {bindActionCreators} from 'redux';
import CardContainer from '../card-container/CardContainer.jsx';

class OptionalProducts extends Component {
    
    componentWillMount() {
        this.props.fetchOptionalProducts();
    }

    render() {
        return (
            <div>
                {/*Slide show*/}
                {/*Optional Products*/}
                {this.props.isFetching && <div> loading ... </div>}
                Optional Products page
                {this.props.products.length > 0 && <CardContainer cards={this.props.products} />}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isFetching: state.optionalProducts.isFetching,
        products: state.optionalProducts.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchOptionalProducts
    }, dispatch);
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(OptionalProducts);