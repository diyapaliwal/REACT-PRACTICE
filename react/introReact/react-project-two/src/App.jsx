import UserCard from './components/userCard';
import './App.css';
import diya from './assets/diya.jpg';
import daina from './assets/daina.jpeg';
import madhubala from './assets/images.jpeg';

function App() {

  return (
    <div className="container">
      <UserCard name='Diya' img={diya} desc='desc1' style={{'border-radius':'10px'}}/>
      <UserCard name='Daina' img={daina} desc='desc2' style={{'border-radius':'10px'}}/>
      <UserCard name='Madhubala' img={madhubala} desc='desc3' style={{'border-radius':'10px'}}/>
    </div>
  )
}

export default App