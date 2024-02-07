import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import PaginationApp from './component/pagination/paginationApp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddressBook from './component/searchAndFilter/addressBook';
import Autocomplete from './component/autocomplete/autocomplete';
import Todo from './component/todoApp/todo';
import Counter from './component/counter/counter';
import Pagination2 from './component/pagination2/pagination';
import AccordianMain from './component/accordian/accordianMain';
import ImageSlider from './component/imageSlider/imageSlider'; 
import TeamSelection from './component/walmart/teamSelection';
// import TransferList from './component/transferList/transferListMap'
import TransferList from './component/transferList/transferListMap1'

export function HomePage() {
  return (
    <div>
      <h1>Home Page!</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

function NavBar() {
  return (
    // Match the route to the Link with the "to" prop
    <>
    <Link to="/">Home</Link>
      <Link to="/paginationApp">Pagination</Link>
      {/* <Link to="/counter">Counter</Link> */}
      <Link to="/addressBook">Address Book</Link>
      <Link to="/autocomplete">Autocomplete</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/pagination2">Pagination V2</Link>
      <Link to="/accordian">Accordian</Link>
      <Link to="/imageSlider">Image Slider</Link>
      <Link to="/teamSelection">Team Selection</Link>
      <Link to="/transferList">Transfer List</Link>
      
      </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <NavBar />
          <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/paginationApp" element={<PaginationApp />} />
          {/* <Route exact path="/counter" element={<Counter /> } /> */}
          <Route exact path="/addressBook" element={<AddressBook owner="Nitika Gahlawat"/> } />
          <Route exact path="/autocomplete" element={<Autocomplete /> } />
          <Route exact path="/todo" element={<Todo /> } />
          <Route exact path="/counter" element={<Counter /> } />
          <Route exact path="/pagination2" element={<Pagination2 /> } />
          <Route exact path="/accordian" element={<AccordianMain /> } />
          <Route exact path="/imageSlider" element={<ImageSlider /> } />
          <Route exact path="/teamSelection" element={<TeamSelection /> } />
          <Route exact path="/transferList" element={<TransferList /> } />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
