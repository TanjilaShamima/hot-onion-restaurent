import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import HomeIndex from './components/Home/HomeIndex/HomeIndex';
import FooterIndex from './components/Footer/FooterIndex/FooterIndex';



function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <HomeIndex></HomeIndex>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          
        </Switch>
        <FooterIndex></FooterIndex>
      </Router>
      
    </div>
  );
}

export default App;
