import React,{Component} from 'react';
import {Route, NavLink ,Switch, history} from 'react-router-dom'
import Search from './Components/Search';
import Collection from './Components/Collection';
import{initializeApp} from "firebase/app";
import{getFirestore, collection, getDocs, doc ,addDoc, deleteDoc, setDoc} from 'firebase/firestore';
import SelectGame from './Pages/SelectGame'
import UserList from './Pages/UserList';
import './App.css';

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

    
    


  
   
  

   /*componentDidMount(){
     //this.getGameData();
     this.readGames();
   }*/

  

    

    readGames = async () =>{
      
     // console.log('collection',userCol);
     const gamesSnapshot =  await getDocs(userCol);
     // console.log('games',gamesSnapshot);
    

     const userList = [];
      gamesSnapshot.forEach(doc =>{
       // console.log(doc.data().name);
        const videoGame = {
          id: doc.id,
          name: doc.data().name
        }
        userList.push(videoGame)
        

      })
      this.setState({
        ownerGames:userList
      });

      //console.log(this.state.ownerGames);


    }
    

  

    removeGame = async id =>{
     

      const gameDoc = doc(userCol,id);

      await deleteDoc(gameDoc);

      this.readGames();
    }

    updateOwnerList = async videoGame =>{
     const gameDoc = doc(userCol,videoGame.id);

     await setDoc(gameDoc,{name:videoGame.name});

     this.readGames();

    }

    

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

                </nav> 


              </header>
              

                  <main className="box">

                    <div>
                      <Switch>

                        <Route exact path="/userList" > <UserList/> </Route>
                        <Route exact path="/SelectGame"><SelectGame/></Route>

                      </Switch>
                      
                    </div>
                    
                    
                    
           
                    

                      

                  </main>
            </div>
            

              
          );
   }


}


