import React from 'react';


import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';

const HatsPage = (props)=>{
  console.log(props)
  
  return(
    <div>
      <button onClick={() => props.history.push( '/topics/:topicId')}>click me</button>
      
      <h1>HatsPage</h1>
     
      <p> Fan funka nu</p>
    </div>

  );
};

const TopicList=(props)=>{
  console.log(props)
  return(
    <div>
<h1>hello mannen {props.match.params.topicId}</h1>
      <p> korv </p>
    </div>
  );
};






function App() {
  return (
    <div>
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/hats' component={HatsPage}/>
       <Route path='/topics/:topicId' component={TopicList}/>
       
     </Switch>
    
    </div>
   
  );
}

export default App;
