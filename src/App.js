import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAlbum from './components/AddAlbum';
import SearchAlbum from './components/SearchAlbum';
import DeleteAlbum from './components/DeleteAlbum';
import ViewAlbum from './components/ViewAlbum';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddAlbum/>}/>
      <Route path='/SearchAlbum' element={<SearchAlbum/>}/>
      <Route path='/DeleteAlbum' element={<DeleteAlbum/>}/>
      <Route path='/ViewAlbum' element={<ViewAlbum/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
