import Pages from "./pages/Pages"
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from './components/Search'
// import styled from "styled-components";
// import Home from './pages.Home'
// import {Link} from 'react'

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      {/* <div><Link to={Home}>
        What's for dinner?
        </Link>
        </div> */}
      <Search />
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
    
  );
}



export default App;
