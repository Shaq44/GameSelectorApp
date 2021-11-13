import React from "react";


class Collection extends React.Component{
    state={
        gameList:'',
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
            <div className="box3">
              <i className="fas fa-list" id="wish"></i>
              <h3>WishList</h3>
            </div>
        </div>
        )
    }

}

export default Collection;
