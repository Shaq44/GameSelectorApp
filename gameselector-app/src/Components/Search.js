import React from "react";

export default class Search extends React.Component{
    state={
        gameSearch: '',
    }

 handleChange = e =>{
        this.setState({
            gameSearch: e.target.value,
        });
    }

     handleSubmit = e =>{
        e.preventDefault();
        this.props.getGameData(this.state.gameSearch);
        this.setState({
            gameSearch: '',
        })
    }

    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChange}
                    value={this.state.gameSearch}

                />
                <button>Search</button>

            </form>
        )
    }
}