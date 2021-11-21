import React from "react";
import { initializeApp } from "@firebase/app";
import { getFirestore,collection, getDocs, deleteDoc,doc } from "@firebase/firestore";
import RemoveGame from "../Components/GameList";


//This is my webapps Firebase configutration
const firebaseConfig = {
	apiKey: "AIzaSyCvVYzLP1yhRwHSCIdeDfxa-HuWYZtdg4k",
	authDomain: "jsr-914-4e965.firebaseapp.com",
	projectId: "jsr-914-4e965",
	storageBucket: "jsr-914-4e965.appspot.com",
	messagingSenderId: "954808629289",
	appId: "1:954808629289:web:ebf42a3f9cc4bb458bc438"
  };

//This initializes Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const userCol = collection(db,'OwnersGames');

export default class UserList extends React.Component{
state={
    webpage:'Owned List',
    GameList: [],

}

componentDidMount(){
   this.readGames()
}

readGames = async () =>{
const gameSnapshot = await getDocs(userCol);

const userGames = [];
gameSnapshot.forEach(doc=>{
    const videoGame = {
        id:doc.id,
        name: doc.data().name
    }
    
    userGames.push(videoGame)

})
this.setState({
    GameList:userGames
})
//console.log(this.state.gameList)

}

removeGame = async id=>{
   const gameDoc =  await doc(userCol,id);
     deleteDoc(gameDoc);

     this.readGames();
}





render(){
    this.state.GameList.map(game=>{
        console.log(game.name)
    });

    const gameInfo = this.state.GameList.map(games =>{
        return(
            <li key={games.id}>
                {games.name}
                
            </li>
        )
    })

        return(
            <main>
                <h1>{this.state.webpage}</h1>
                <div className="col-12">
                <RemoveGame GameList={this.state.GameList} removeGame={this.removeGame}/>
                
                </div>
            </main>
        );
}

}

