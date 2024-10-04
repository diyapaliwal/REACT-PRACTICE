import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';
import {useState} from 'react'

function App() {
  const [isLoggedIn, setLoggedIn]=useState(false);

  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }

  return(
    <div>
      <h1>Welcome </h1>
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>
  )

  // return(
  //   <div>
  //     {isLoggedIn?<LogoutBtn/>:<LoginBtn/>}
  //   </div>
  // )


  // if(isLoggedIn){
  //   return(
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }
}

export default App 