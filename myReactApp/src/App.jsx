import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {appGetBusy,appGetReady} from './app-actions';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './containers/home/Home.jsx';
import ClientServices from './containers/client-services/ClientServices.jsx';
import FFP from './containers/ffp/FFP.jsx';
import OptionalProducts from './containers/optional-products/OptionalProducts.jsx';
import {Route, IndexRoute} from 'react-router';


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
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/ffp" component={FFP} />
                <Route path="/optional-products" component={OptionalProducts} />
                <Route path="/client-services" component={ClientServices} />
                <Footer />
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