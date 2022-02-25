import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Pagination from './Components/Pagination';
import Favourites from './Components/Favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <h1>hello pepcoders</h1> */}
      {/* <h2>Navbar</h2> */}
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<>
          <Banner />
          <Movies />
          <Pagination />
        </>} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      {/* <Banner></Banner>
      <Movies></Movies>
      <Pagination></Pagination> */}
      {/* <h2>Banner</h2>
      <h2>Trending Movies</h2>
      <h2>Pagination</h2> */}
    </BrowserRouter>
  );
}

export default App;
