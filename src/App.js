import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomeIndex from './components/Home/HomeIndex/HomeIndex';
import FooterIndex from './components/Footer/FooterIndex/FooterIndex';
import SingleFoodIndex from './components/SingelFoodPage/SingleFoodIndex/SingleFoodIndex';
import FoodSelectTab from './components/Home/FoodSelectTab/FoodSelectTab';
import LogIn from './components/Shared/LogIn/LogIn';
import Register from './components/Shared/Register/Register';
import OrderManagementIndex from './components/OrderManagement/OrderManagementIndex/OrderManagementIndex';
import OrderPlaced from './components/OrderPlaced/OrderPlaced';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <HomeIndex></HomeIndex>
          </Route>
          <Route path="/home">
            <HomeIndex></HomeIndex>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/signup">
            <Register></Register>
          </Route>         
          <Route path="/food/:foodId">
            <SingleFoodIndex></SingleFoodIndex>
          </Route>

          <Route path="/food">
            <FoodSelectTab></FoodSelectTab>
          </Route>
          <PrivateRoute path="/order-manage">
            <OrderManagementIndex></OrderManagementIndex>
          </PrivateRoute>

          <PrivateRoute path="/order-placed">
            <OrderPlaced></OrderPlaced>
          </PrivateRoute>
                  
          <Route path="*">
            <NotFound></NotFound>
          </Route>        
        </Switch>
        <FooterIndex></FooterIndex>
      </Router>
      
    </div>
  );
}

export default App;
