import React, {Component} from 'react'
import './Home.css';

class Home extends Component {
    render() {
        return(
            <div className="home">
                my {this.props.name}
            </div>
        )
    }
}

export default Home;