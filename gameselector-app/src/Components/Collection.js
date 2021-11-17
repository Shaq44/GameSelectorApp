import React from "react";


class Collection extends React.Component{
    state={
        gameList:'',
        buy: true,
    }

    handleChange = e =>{
        this.setState({
            gameList: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.createGames(this.state.gameList);
        this.setState({
            gameList:e.target.value
        })
    }

    render() {
        return (
                     <div className="container">
            <div className="box2">
              <i className="fas fa-shopping-cart" id="buy" ></i>
              <h3>Buy</h3>
            </div>
        </div>
        )
    }

}

export default Collection;
