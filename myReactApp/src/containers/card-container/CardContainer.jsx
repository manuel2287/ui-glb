import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '../../components/card/Card.jsx';

class CardContainer extends Component {
   /* wichCardRender() {
        return this.props.cards.type === "" ? <Card /> : <CardSmall/>
    }*/
    render() {
        return(<div>
            {this.props.cards.map((card, index)=>{
                return <Card key={index} {...card}/>
            })}
        </div>)
    }
}

/*const mapStateToProps = (state) => {
    return {
        cards: state.cards
    }
}*/

export default CardContainer;