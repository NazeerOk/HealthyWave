import './App.css';
import './css/style.css'
import './css/mob-res.css'
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact'
import Appointment from './components/Appointment';

function App() {
  
  window.onload=function(){
    var mobile = (/iphone|ipad|ipod|android|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {
        alert("Mobile responsive is still in development");              
    } 
  }
  return (
    <Router>
        <div className="App">
        <Sidebar/>
          <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/appointments' component = {Appointment}/>
          <Route path='/contact-us' component={Contact}/>
          </Switch>
        </div>
    </Router>
    
  );
}

export default App;
