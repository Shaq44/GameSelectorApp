import React,{Component} from 'react';
import Search from './Components/Search';
//import{initializeApp} from "firebase/app";
//import{getFirestore, collection, getDocs} from 'firebase/firestore';
import './App.css';

 export default class App extends Component {
   state = {
     websiteName: 'Game Selector',
     getGameData:{},
   }

   componentDidMount(){
     this.getGameData();
   }

   getGameData = async gameName =>{
      let gameAppUrl = ` https://api.rawg.io/api/games?key=5e83a4fe47864da7a00aac376124e44f&dates=2019-09-01,2019-09-30&platforms=18,1,7`
    
      const response = await fetch(gameAppUrl);

      const parsedResponse = await response.json();
      this.setState({
        getGameData: parsedResponse
      })
      console.log(parsedResponse);
    /*fetch(gameAppUrl)
        .then((response) =>{
          return response.json()
        })
        .then((parsedResponse) =>{
          //console.log(parsedResponse);
          this.setState({
            getGameData:parsedResponse
          },()=>{
          // console.log(this.state.getGameData);
        })
        })
        .catch(error =>{
          console.log('error',error);
        })*/

        


    }
   

   render(){
     return(
      <main className="box">
        <h1>{this.state.websiteName}</h1>
        <Search getGameData={this.getGameData}/>
        <div className="card rounded shadow p-3" id="container">
        <div>{this.state.getGameData.name}</div>
        <img src={this.state.getGameData.image_background} alt="pic"/>

        
        </div>

      </main>
     );
   }


}


