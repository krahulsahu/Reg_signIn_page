import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Signup from './comp/Signup';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './comp/Login';
import HomePage from './comp/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
