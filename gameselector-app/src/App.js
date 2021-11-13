import React,{Component} from 'react';
import Search from './Components/Search';
import{initializeApp} from "firebase/app";
import{getFirestore, collection, getDocs} from 'firebase/firestore';
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
    };
    


  
   
  

   componentDidMount(){
     this.getGameData();
    // this.collectGames();
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

    collectGames = async () =>{

      const gameCol = collection(db,"games")
      const gamesSnapshot = await getDocs()

      const games = [];
      gamesSnapshot.forEach(doc =>{
        const game = {
          id: doc.id,
          name: doc.data().name
        }
        games.push(game)

      })
      this.setState({
        games:games
      })
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
      
        </div>

      </main>
     );
   }


}


