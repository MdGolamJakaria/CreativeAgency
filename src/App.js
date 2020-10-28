import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Compunents/Home/Home/Home';
import Portfolio from './Compunents/Portfolio/Portfolio/Portfolio';
import Team from './Compunents/Team/Team/Team';
import Contact from './Compunents/Contact/Contact/Contact';
import Login from './Compunents/Shared/Login/Login';
import Hire from './Compunents/Home/Hire/Hire';
import Order from './Compunents/Order/Order/Order';
import { createContext, useState } from 'react';

export const OrderContext = createContext()
export const customerCatagoryContext = createContext()

function App() {

  const [order, setorder] = useState(null)
  const [customerCatagory, setCustomerCatagory] = useState('order')
  return (
    <OrderContext.Provider value={[order, setorder]}>
      <customerCatagoryContext.Provider value={[customerCatagory, setCustomerCatagory]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/portfolio">
              <Portfolio></Portfolio>
            </Route>
            <Route path="/team">
              <Team></Team>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/hire">
              <Hire></Hire>
            </Route>
            <Route path="/order">
              <Order></Order>
            </Route>
          </Switch>
        </Router>
      </customerCatagoryContext.Provider>
    </OrderContext.Provider>
  );
}

export default App;
