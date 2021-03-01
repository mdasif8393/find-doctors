import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Card, } from 'react-bootstrap';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import ThreeHundredTaka from './components/ThreeHundredTaka/ThreeHundredTaka';
import FourHundredTaka from './components/FourHundredTaka/FourHundredTaka';
import FiveHundredTaka from './components/FiveHundredTaka/FiveHundredTaka';
import SixHundredTaka from './components/SixHundredTaka/SixHundredTaka';
import SevenHundredTaka from './components/SevenHundredTaka/SevenHundredTaka';
import EightHundredTaka from './components/EightHundredTaka/EightHundredTaka';
import TenHundredTaka from './components/TenHundredTaka/TenHundredTaka';


function App() {
  return (
    <Router>
      <Switch>

        <Route path ="/home">
          <Home></Home>
        </Route>

        <Route exact path ="/">
          <Home></Home>
        </Route>

        <Route path="/ThreeHundredTaka">
          <ThreeHundredTaka></ThreeHundredTaka>
        </Route>

        <Route path="/FourHundredTaka">
          <FourHundredTaka></FourHundredTaka>
        </Route>

        <Route path="/FiveHundredTaka">
          <FiveHundredTaka></FiveHundredTaka>
        </Route>

        <Route path="/SixHundredTaka">
          <SixHundredTaka></SixHundredTaka>
        </Route>

        <Route path="/SevenHundredTaka">
          <SevenHundredTaka></SevenHundredTaka>
        </Route>

        <Route path="/EightHundredTaka">
          <EightHundredTaka></EightHundredTaka>
        </Route>

        <Route path="/TenHundredTaka">
          <TenHundredTaka></TenHundredTaka>
        </Route>

        <Route path ="*">
          <NoMatch></NoMatch>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
