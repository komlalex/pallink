import "./styles/css/main.css";
import axios from "axios";
import { SWRConfig } from "swr";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
//import Landing from "./components/Landing";
//import Chats from "./components/Chats";
import Signup from "./components/Signup";
//import People from "./components/People";
axios.defaults.baseURL = "http://localhost:1776";
function App() {
  const fetcher  = (url) => axios.get(url).then(res => res.data);
  return (
    <SWRConfig value={{fetcher}}>
      <div>
      <Signup/>
    </div>
    </SWRConfig>
    
  );
}

export default App;
