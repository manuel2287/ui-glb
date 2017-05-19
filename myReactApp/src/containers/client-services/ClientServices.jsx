import React, {Component} from 'react';
import {connect} from 'react-redux';

class ClientServices extends Component {
    render() {
        return (
            <div>
                Client Services page
            </div>
        );
    }
}

export default connect()(ClientServices);