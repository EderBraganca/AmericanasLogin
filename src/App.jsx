import { initializeApp } from "firebase/app";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

const firebaseConfig = {
  apiKey: "AIzaSyD-p5CWQSg6v7ecF6uq-4Do4aV_AUm7Tbg",
  authDomain: "americanas-5e931.firebaseapp.com",
  projectId: "americanas-5e931",
  storageBucket: "americanas-5e931.appspot.com",
  messagingSenderId: "491903970810",
  appId: "1:491903970810:web:90984ebb7bcefa4ac88843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}


export default App
