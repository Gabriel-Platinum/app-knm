import"./assets/style.css";
import Header from "./components/HeaderMain";
import SmallHeader from "./components/SmallHeader";
import Home from "./pages/Home";
import Key from "./pages/Key";
import Meetings from "./pages/Meetings";
import Statistics from "./pages/Statistics";
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/keys" element={<Key/>}/>
      <Route path="/meetings" element={<Meetings/>}/>
      <Route path="/statistics" element={<Statistics/>}/>
    </Routes>

     
    </>
   
  );
}

export default App;
