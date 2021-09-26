import About from './About';
import Home from './Home';
import Shop from './Shop';
import Usestate from './Usestate';
import Nav from './Nav';
import Cart from './Cart';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="app">
      
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Home" component={Home} />
            <Route path="/Cart" component={Cart}/>
            <Route path="/Shop" component={Shop}/>   
          </Switch>
      </div>
      
    </Router> 
  );
}
export default App;
