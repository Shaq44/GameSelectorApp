import React from "react";


class Collection extends React.Component{
    state={
        newGame:'',
        
    }

   

    buyGame = e =>{
        e.preventDefault();
        this.props.createGame(this.state.newGame);
        alert("game has been bought");
        this.setState({
            newGame:''
        })
    }

  

    render() {
        return (
        <div className="container">
            <div className="box2" >
              <i className="fas fa-shopping-cart" id="buy" onClick={this.buyGame} ></i>
              <h3 onClick={this.buyGame} id="label">Buy</h3>
            </div>
        </div>
        )
    }

}

export default Collection;
