import React from "react";
import Search from "../Components/Search";
import Collection from "../Components/Collection";
import { initializeApp } from "@firebase/app";
import { getFirestore,addDoc,collection } from "@firebase/firestore";


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



export default class SelectGame extends React.Component{
    state={
        websiteName:'Game Selector',
        getGameData:[],
    }

    getGameData = async gameName =>{
        let gameAppUrl = `https://api.rawg.io/api/games?search_exact&search=${gameName}&key=5e83a4fe47864da7a00aac376124e44f&dates=2019-09-01,2019-09-30&platforms=18,1,7`;
      
        const response = await fetch(gameAppUrl);
  
        const parsedResponse = await response.json();
      console.log(parsedResponse.results);
        this.setState({
          getGameData:parsedResponse.results
        })
  
        
  
      }

      
    createGame = async newGame =>{
        this.state.getGameData.map((vg)=>{
         newGame = vg.name;
         console.log(newGame);
       })
         await addDoc(userCol,{
           name:newGame
         });
 
     }
  
    
    render(){
      console.log(this.state.getGameData)
        const gamesUI = this.state.getGameData.map((game)=>{
          console.log(game.name)
            return(
              <div key={game.id}>

                <div>{game.name}</div>
                <img src={game.background_image} alt="pic"/>
              </div>
            )
          });
        
        return(
            <main>
                <h1>{this.state.websiteName}</h1>

            <Search getGameData={this.getGameData}/>
            <div className="card rounded shadow p-3" id="container">
                {gamesUI}
            < Collection createGame={this.createGame}/>
            </div>
            </main>
            
  
        )
    }
}