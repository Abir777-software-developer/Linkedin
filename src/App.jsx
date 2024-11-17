import './App.css'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Login from './Components/Login'
import Header from './Components/Header'
import Home from './Components/Home'
import { useEffect } from 'react'
import { getUserAuth } from './Actions/Index'
import { connect } from 'react-redux'

function App(props) {
    useEffect(() =>{
      props.getUserAuth();
    },[])
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


const mapStateToProps=(state) =>{
  return{
    user:state.userState.user,
  };
};

const mapDispatchToProps=(dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
