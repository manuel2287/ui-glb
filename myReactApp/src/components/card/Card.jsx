import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default Card;