import './App.css'
import SideBar from './Components/MenuBar'
import Content from "./Components/Content";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Content />
      <SideBar />
     </div>
  )
}

export default App
