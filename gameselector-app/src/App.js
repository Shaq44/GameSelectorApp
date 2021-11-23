import React,{Component} from 'react';
import {Route, NavLink ,Switch, history} from 'react-router-dom';
import SelectGame from './Pages/SelectGame';
import UserList from './Pages/UserList';
import './App.css';
import Home from './Pages/Home';


 export default class App extends Component {

  componentDidMount(){
    console.log(process.env.REACT_APP_API_KEY);
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

                    <NavLink exact to='/Home' id="hom">
                      Home
                    </NavLink>

                </nav> 


              </header>
              

                  <main className="box">

                    <div className="page">
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


