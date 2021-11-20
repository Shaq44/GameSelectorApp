import React from "react";
import { initializeApp } from "@firebase/app";
import { getFirestore,collection, getDocs } from "@firebase/firestore";


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
    gameList: []

}

componentDidMount(){
    this.readGames();
}

readGames = async () =>{
const gameSnapshot = await getDocs(userCol);

const userGames = [];
gameSnapshot.forEach(doc=>{
    const videoGame = {
       id: doc.id,
        name: doc.data().name
    }
    userGames.push(videoGame)

})
console.log(userGames)
this.setState({
    gameList:userGames
})

}





render(){
    const gameInfo = this.state.gameList.map((game)=>{
        <ul>
            Name: {game.name}

        </ul>
        console.log(game.name)
        
    });
   // console.log(this.state.gameList)

        return(
            <main>
                <h1>{this.state.webpage}</h1>
                <div className="card rounded shadow p-3">
                  {gameInfo}    
                    
                </div>
            </main>
        );
}

}

