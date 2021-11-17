import React,{Component} from 'react';
import {Route, Routes, NavLink ,Switch, history} from 'react-router-dom'
import Search from './Components/Search';
import Collection from './Components/Collection';
import{initializeApp} from "firebase/app";
import{getFirestore, collection, getDocs, doc ,addDoc, deleteDoc, setDoc} from 'firebase/firestore';
import UserList from './Pages/userList';
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
const gameCol = collection(db,"Games");
 export default class App extends Component {
   
    state = {
      websiteName: 'Game Selector',
      getGameData:[],
    };

    
    


  
   
  

   componentDidMount(){
     this.getGameData();
     this.readGames();
   }

   getGameData = async gameName =>{
      let gameAppUrl = `https://api.rawg.io/api/games?search_exact&search=${gameName}&key=5e83a4fe47864da7a00aac376124e44f&dates=2019-09-01,2019-09-30&platforms=18,1,7`;
    
      const response = await fetch(gameAppUrl);

      const parsedResponse = await response.json();
    //console.log(parsedResponse.results);
      this.setState({
        getGameData:parsedResponse.results
      })
  

    }

    readGames = async () =>{
      
      console.log('collection',gameCol);
      const gamesSnapshot =  await getDocs(gameCol);
      
      console.log('Games',gamesSnapshot);

     const userList = [];
      gamesSnapshot.forEach(doc =>{
        console.log(doc.data().name);
        const videoGame = {
          id: doc.id,
          name: doc.data().name
        }
        userList.push(videoGame)
        

      });
      this.setState({
        getGameData:userList
      });

      console.log(this.state.getGameData);
    }

    createGame = async newGame =>{
      await addDoc(gameCol,{
        name:newGame
      });

      this.readGames();

    }

    removeGame = async id =>{
     // const gameCol = collection(db,"GameLibrary");

      const gameDoc = doc(gameCol,id);

      await deleteDoc(gameDoc);

      this.readGames();
    }

    updateOwnerList = async videoGame =>{
     const gameDoc = doc(gameCol,videoGame.id);

     await setDoc(gameDoc,{name:videoGame.name});

     this.readGames();

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
    
    <div className="App">

      <header>
        <nav>
            <NavLink exact to ='/userList' id="link">
                      Owners List
            </NavLink>
            <NavLink exact to='/Home' id="home">

              Home
            </NavLink>

        </nav> 


      </header>

          <main className="box">

            <div>
              <Switch>
                <Route exact path="/"> <App/></Route>
                <Route exact path="/UserList" > <UserList/> </Route>
              
              </Switch>  
            </div>

              <h1>{this.state.websiteName}</h1>
            
              <Search getGameData={this.getGameData}/>
              <div className="card rounded shadow p-3" id="container">
              {gamesUI}
              < Collection createGame={this.createGame}/>
            

              </div>

          </main>
    </div>
     

      
     );
   }


}


