import './App.css'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
import Home from './Components/Home'
function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={
              <>
                <Header />
                <Home />
              </>
              }/> 
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
