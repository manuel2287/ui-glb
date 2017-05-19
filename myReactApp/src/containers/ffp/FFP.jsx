import React, {Component} from 'react';
import {connect} from 'react-redux';

class FFP extends Component {
    render() {
        return (
            <div>
                Frequent Flyer Program page
            </div>
        );
    }
}

export default connect()(FFP);