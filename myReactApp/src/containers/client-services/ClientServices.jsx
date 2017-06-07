import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardContainer from '../card-container/CardContainer.jsx';
import {bindActionCreators} from 'redux';
import {fetchClientServices} from './actions';
class ClientServices extends Component {
    componentWillMount(){
        this.props.fetchClientServices();
    }
    
    render() {
        return (
            <div>
                {this.props.isFetching && <div classID="loading">loading...</div>}
                {this.props.services.length > 0 && <CardContainer cards={this.props.services} />}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchClientServices
    }, dispatch);
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.clientServices.isFetching,
        services: state.clientServices.services
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientServices);