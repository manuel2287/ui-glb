import React, {Component} from 'react';
import {connect} from 'react-redux';

class OptionalProducts extends Component {
    render() {
        return (
            <div>
                Optional Products page
            </div>
        );
    }
}

export default connect()(OptionalProducts);