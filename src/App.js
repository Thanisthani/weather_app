import React from 'react'
import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

function App() {
  return (
    <div>
    <Router>
        <Routes>
          < Route path="/" exact element={<Dashboard />} />   
          < Route path="/detail" exact element={<Detail />} />   
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
