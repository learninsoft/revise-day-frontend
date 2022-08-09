import './App.css';
import axios from 'axios';
import LaunchApp from "./Components/LaunchComponent/launch";

axios.defaults.baseURL = "http://localhost:8000"

function App() {
  return (
    <div>
      <LaunchApp/>
    </div>
  );
}

export default App;
