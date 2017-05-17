import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {appGetBusy,appGetReady} from './app-actions';

import Home from './components/home/Home.jsx';

class App extends Component {
    componentWillMount() {
        this.props.appGetBusy();
    }

    componentDidMount() {
        this.props.appGetReady();
    }

    render() {
        return (
            <div>
                <div className="app-style">
                    Hello world
                </div>
                <Home name="Pepe"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ready: state.app.ready
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({appGetBusy, appGetReady}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);