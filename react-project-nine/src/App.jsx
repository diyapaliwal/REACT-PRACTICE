import {createContext,useState} from 'react'
import './App.css'
import ChildA from './components/ChildA';

//step 1:- create context
const ThemeContext = createContext();
// Step 2:- wrap all the child inside a provider
// step 3:- pass the value
// Step 4:- consume the value in consumer
function App() {
  // const [user,setUser]=useState({name:"Diya"});
  const [theme,setTheme]=useState("light");
  return (
    <ThemeContext.Provider value= {{theme,setTheme}}>
      <div id="ChangeTheme" style={{backgroundColor: theme==='light'?"beige":"black"}}>
        <ChildA/>
         </div>
    </ThemeContext.Provider>
    
  //   <>
  //   <UserContext.Provider value={user}>
  //   <ChildA/>
  //   </UserContext.Provider>
  // </>
  )
}
export default App
// export {UserContext}
export {ThemeContext}
