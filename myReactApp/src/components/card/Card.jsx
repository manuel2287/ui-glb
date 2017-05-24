import React, {Component} from 'react';
import "./Card.css";


class Card extends Component {
    render() {
        return(
            <div>
                <img src={this.props.image} alt={this.props.alt} />
                <div>
                    <h4> {this.props.title} </h4>
                    <p> {this.props.text} </p>
                </div>
            </div>
        )
    }
}

export default Card;