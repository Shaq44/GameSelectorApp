import React from 'react';

export default function GameList(props){
    let deleteGame = props.GameList.map(game=>{
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
    )
}