import './App.css'
import { createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter(
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/about",
    element: <About />
  },
  {
    path:"/dashboard",
    element: <Dashboard />
  },
);
function App() {

  return (
    <h1>diya</h1>
  )
}

export default App