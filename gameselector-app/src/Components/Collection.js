import React from "react";


class Collection extends React.Component{
    state={
        newGame:'',
        buy: true,
    }

    handleChange = e =>{
        this.setState({
            gameList: e.target.value
        })
    }

    buyGame = e =>{
        e.preventDefault();
        this.props.createGame(this.state.newGame);
        this.setState({
            newGame:''
        })
    }

  

    render() {
        return (
                     <div className="container">
            <div className="box2" >
              <i className="fas fa-shopping-cart" id="buy" onClick={this.buyGame} ></i>
              <h3 onClick={this.buyGame}>Buy</h3>
            </div>
        </div>
        )
    }

}

export default Collection;
