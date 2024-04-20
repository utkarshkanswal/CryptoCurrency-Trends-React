import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Data from './Components/Data'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Data/>}> </Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
