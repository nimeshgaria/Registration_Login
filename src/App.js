import React, {Component, useState} from 'react';
import Comment from "./Comment";
import './App.css';
import SignUp from './SignUp';
import UserList from './UserList';
import './index.css'
import { tab } from '@testing-library/user-event/dist/tab';
import Login from "./components/Login";

function App(props)  {
  const[currentTab , setCurrentTab] = useState("Login")

  const onTabHandler =(tab) =>{
    setCurrentTab(tab) 
    console.log(tab)
  }
  return (
    <>
    <ul>
    <li onClick={(e) => onTabHandler("SignUp")}> Sign Up</li>    
    <li onClick={(e) => onTabHandler("UserList")}> UserList</li>
    <li onClick={(e) => onTabHandler("Login")}> Login</li>
    
    </ul>
     {currentTab==='SignUp' &&
      <SignUp/>
     }
     {currentTab==='UserList' &&
      <UserList/>
     }
     {currentTab==='Login' &&
      <Login changeTab = {onTabHandler}/>
     }
     
     </>
    ) ;
}
export default App;
