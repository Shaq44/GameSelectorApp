import React,{Component} from 'react';
import {Route, NavLink ,Switch, history} from 'react-router-dom'
import Search from './Components/Search';
import Collection from './Components/Collection';
import{initializeApp} from "firebase/app";
import{getFirestore, collection, getDocs, doc ,addDoc, deleteDoc, setDoc} from 'firebase/firestore';
import SelectGame from './Pages/SelectGame'
import UserList from './Pages/UserList';
import './App.css';
import Home from './Pages/Home';

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
 export default class App extends Component {
   
    state = {
      websiteName: 'Game Selector',
      getGameData:[],
      ownerGames:[],
    };

    

   render(){
  




         
              
     
    
            
            return(
            
            <div className="App">
                

              <header>
                <nav>
                    <NavLink exact to ='/userList' id="link">
                              Owners List
                    </NavLink>
                    <NavLink exact to='/SelectGame' id="sel">

                      Select Game
                    </NavLink>

                    <NavLink exact to='/Home' id="hom">
                      Home
                    </NavLink>

                </nav> 


              </header>
              

                  <main className="box">

                    <div>
                      <Switch>

                        <Route exact path="/userList" > <UserList/> </Route>
                        <Route exact path="/SelectGame"><SelectGame/></Route>
                        <Route exact path="/Home"><Home/></Route>

                      </Switch>
                      
                    </div>
                    
                    
                    
           
                    

                      

                  </main>
            </div>
            

              
          );
   }


}


