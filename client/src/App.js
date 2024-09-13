import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './components/AuthContext';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Ticket from './components/Ticket';
import Services from './components/Services';
function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Register/>}/>
      <Route path='/ticket' element={<Ticket/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
