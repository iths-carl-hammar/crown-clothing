import React from 'react';


import './App.scss';

import HomePage from './pages/homepage/homepage.component';




import { Switch, Route, } from 'react-router-dom';
import { connect } from 'react-redux';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './Redux/user/user.action';


// Root Reducer  

class App extends React.Component {
  
    
    
    
  
  
  unsubscribeFromAuth = null
  
  componentDidMount(){ // api fetch . jippi 
   const {setCurrentUser}  = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      //this.setState({currentUser: user}) 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);


        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
       
            

            });
            

            
         

          
          
        });
       
      }

      this.setState(userAuth);
      
      
      //console.log(user);
    });
  
  }
  
  componentWillUnmount(){ // allso a life cycle method.  ta bort nåt från DOM. 
    this.unsubscribeFromAuth();
  }
  
  
  render(){
    return (
      <div>
      <Header  />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage}/>
      <Route  path='/signin' component={SignInAndSignUpPage}/>
      
      
      </Switch>
      
      </div>
      
      );
    }
    
  }

  const mapDispatchToProps = dispatch =>({
    setCurrentUser: user => dispatch(setCurrentUser(user))

  })
  
  export default connect(null,mapDispatchToProps)(App);
  