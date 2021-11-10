import React,{Component} from 'react';
import Search from './Components/Search';
//import{initializeApp} from "firebase/app";
//import{getFirestore, collection, getDocs} from 'firebase/firestore';
import './App.css';

 export default class App extends Component {
   
    state = {
      websiteName: 'Game Selector',
      getGameData:{},
    };
    


  
   
  

   componentDidMount(){
     this.getGameData();
   }

   getGameData = async gameName =>{
      let gameAppUrl = `https://api.rawg.io/api/games?search_exact&search=${gameName}&key=5e83a4fe47864da7a00aac376124e44f&dates=2019-09-01,2019-09-30&platforms=18,1,7`;
    
      const response = await fetch(gameAppUrl);

      const parsedResponse = await response.json();
    console.log(parsedResponse.results);
      this.setState({
        getGameData:parsedResponse
      })
      const games = this.state.getGameData.results;

        console.log(games);
      //this logs info from the results data of getGameData in state in the console
      games.map((game)=>{
        console.log(game.name);
        console.log(game.background_image)
        return(
          <div>
            <div>{game.name}</div>
            <img src={game.background_image} alt="pic"/>
          </div>
        )
        
        
      });

    }

    

   render(){
  
  

    //this shows an empty object or array depending on value in state
  //console.log(this.state.getGameData);



  //this shows state undefined and then rerenders an empty array 
  //console.log(this.state.getGameData.results);


/*const games = this.state.getGameData.results.map((game)=>{
  console.log(game.name);
  console.log(game.background_image)
  return(
    <div>
      <div>name: {game.name}</div>
    </div>
  )
});*/
    
     
    
    
     return(
       

     

      <main className="box">
        <h1>{this.state.websiteName}</h1>
        <Search getGameData={this.getGameData}/>
        <div className="card rounded shadow p-3" id="container">
        
        </div>

      </main>
     );
   }


}


