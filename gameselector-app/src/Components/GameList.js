import React from 'react';

export default class GameList extends React.Component{
    state={
        updateGames:{
            id:'',
            name:''
        },
        showUpdateInput:false,
    }

    handleChange = e =>{
        this.setState({
            updateGames:{
                id:this.state.updateGames.id,
                name:e.target.value,
            }
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.updateGame(this.state.updateGames);
        this.hideForm();
    }

    showForm = gameEdit =>{
        this.setState({
            showUpdateInput:true,

            updateGames: {
                id:gameEdit.id,
                name:gameEdit.name
            }
        })
    }

    hideForm = () =>{
        this.setState({
            showUpdateInput:false
        })
    }

    render () {
        let update = this.props.GameList.map(game=>{
            return(
                <li className = "list-group-item" key={game.id}>
                    <div className="d-flex justify-content-between py-2">
                        <div>
                            {game.name}
                        </div>
                        <div>
                            <i onClick={() => this.showForm(game)} className="fas fa-edit mr-2"></i>
                            <i onClick={()=>this.props.removeGame(game.id)} className="far fa-trash-alt"></i>
                        

                        
                            {this.state.showUpdateInput && this.state.updateGames.id === game.id ? <form onSubmit={this.handleSubmit} className="form-inline">
                            
                            <input className="form-control"
                            onChange={this.handleChange}

                            value={this.state.updateGames.name}
            

                            />

                            <button type="submit" className="btn btn-primary form-control mx-2">
                                Update
                            </button>

                            <button onClick={this.hideForm} className="btn btn-secondary form-control">
                                cancel
                            </button>
                            </form>
                            :null

                            }
                        
                        </div>
    
                    </div>
                </li>
            )
        })
        return(
            <div>
                <ul className="list-group">
                    {update}
                </ul>
            </div>
        )
    }
    
   
}

/** let deleteGame = props.GameList.map(game=>{
        return(
            <li className = "list-group-item" key={game.id}>
                <div className="d-flex justify-content-between py-2">
                    <div>
                        {game.name}
                    </div>
                    <div>
                        <i onClick={()=>props.removeGame(game.id)} className="far fa-trash-alt"></i>
                    </div>


                </div>
            </li>
        )
    })
    return(
        <div>
            <ul className="list-group">
                {deleteGame}
            </ul>
        </div>
    ) */