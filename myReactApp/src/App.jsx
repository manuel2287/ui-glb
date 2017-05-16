import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './components/home/Home.jsx';

class App extends Component {
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

export default App;