import React,{Component} from 'react';
import Search from './Components/Search';
import Collection from './Components/Collection';
import{initializeApp} from "firebase/app";
import{getFirestore, collection, getDocs,Doc} from 'firebase/firestore';
import './App.css';

//This is my webapps Firebase configutration
const firebaseConfig = {
  apiKey: "AIzaSyBIiuTFdHgo_bPINlu0T79rp8fmMlFi-dw",
  authDomain: "game-selector-app-51630.firebaseapp.com",
  projectId: "game-selector-app-51630",
  storageBucket: "game-selector-app-51630.appspot.com",
  messagingSenderId: "411624489114",
  appId: "1:411624489114:web:d5c349bce80da24c5f9f23"
};

//This initializes Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 export default class App extends Component {
   
    state = {
      websiteName: 'Game Selector',
      getGameData:[],
      games:[],
      buy:false,
    };
    


  
   
  

   componentDidMount(){
     this.getGameData();
    this.readGames();
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

    readGames = async () =>{

      const gameCol = collection(db,'GameLibrary')
      const gamesSnapshot = await getDocs(gameCol)
      console.log("Games",gamesSnapshot);

     const game = [];
      gamesSnapshot.forEach(doc =>{
        console.log(doc.data());
        const videoGame = {
          id: doc.id,
          name: doc.data().name
        }
        game.push(videoGame)
        

      })
      this.setState({
        games:game
      })

      console.log(this.state.games);
    }

    createGame = newGame =>{

    }

    

   render(){
  

const gamesUI = this.state.getGameData.map((game)=>{
  return(
    <div>
      <div>{game.name}</div>
      <img src={game.background_image} alt="pic"/>
    </div>
  )
});
    
     
    
    
     return(
       

     

      <main className="box">
        <h1>{this.state.websiteName}</h1>
        <Search getGameData={this.getGameData}/>
        <div className="card rounded shadow p-3" id="container">
        {gamesUI}
        < Collection createGame={this.createGame}/>
       
      
        </div>

      </main>
     );
   }


}


