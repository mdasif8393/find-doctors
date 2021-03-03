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
import Professor from './components/Professor/Professor';
import AssociateProfessor from './components/AssociateProfessor/AssociateProfessor';
import AssistantProfessor from './components/AssistantProfessor/AssistantProfessor';
import Consultant from './components/Consultant/Consultant';
import MedicalOfficer from './components/MedicalOfficer/MedicalOfficer';
import Medicine from './components/Medicine/Medicine';
import Gynecology from './components/Gynecology/Gynecology';
import Surgery from './components/Surgery/Surgery';
import Orthopedics from './components/Orthopedics/Orthopedics';
import Child from './components/Child/Child';
import Skin from './components/Skin/Skin';
import Dental from './components/Dental/Dental';
import Ent from './components/Ent/Ent';
import Eye from './components/Eye/Eye';
import Cardiology from './components/Cardiology/Cardiology';
import Gastroenterology from './components/Gastroenterology/Gastroenterology';
import Oncology from './components/Oncology/Oncology';
import Neurology from './components/Neurology/Neurology';
import Rheumatology from './components/Rheumatology/Rheumatology';
import Endocrinology from './components/Endocrinology/Endocrinology';
import Urology from './components/Urology/Urology';
import Hepatology from './components/Hepatology/Hepatology';


function App() {
  return (
    <div>
      <Router >
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

        <Route path="/Professor">
          <Professor></Professor>
        </Route>

        <Route path="/AssociateProfessor">
          <AssociateProfessor></AssociateProfessor>
        </Route>

        <Route path="/AssistantProfessor">
          <AssistantProfessor></AssistantProfessor>
        </Route>

        <Route path ="/Consultant">
          <Consultant></Consultant>
        </Route>

        <Route path ="/MedicalOfficer">
          <MedicalOfficer></MedicalOfficer>
        </Route>

        <Route path ="/Medicine">
          <Medicine></Medicine>
        </Route>

        <Route path ="/Gynecology">
          <Gynecology></Gynecology>
        </Route>

        <Route path ="/Surgery">
          <Surgery></Surgery>
        </Route>

        <Route path ="/Orthopedics">
          <Orthopedics></Orthopedics>
        </Route>

        <Route path ="/Child">
          <Child></Child>
        </Route>

        <Route path="/Skin">
          <Skin></Skin>
        </Route>

        <Route path="/Dental">
          <Dental></Dental>
        </Route>

        <Route path="/Ent">
          <Ent></Ent>
        </Route>

        <Route path="/Eye">
          <Eye></Eye>
        </Route>

        <Route path="/Cardiology">
          <Cardiology></Cardiology>
        </Route>
        
        <Route path="/Gastroenterology">
          <Gastroenterology></Gastroenterology>
        </Route>

        <Route path ="/Oncology">
          <Oncology></Oncology>
        </Route>

        <Route path ="/Neurology">
          <Neurology></Neurology>
        </Route>

        <Route path ="/Rheumatology">
          <Rheumatology></Rheumatology>
        </Route>

        <Route path ="/Endocrinology">
          <Endocrinology></Endocrinology>
        </Route>

        <Route path ="/Urology">
          <Urology></Urology>
        </Route>

        <Route path ="/Hepatology">
          <Hepatology></Hepatology>
        </Route>

        <Route path ="*">
          <NoMatch></NoMatch>
        </Route>

      </Switch>
    </Router>

  
    </div>
    
  );
}

export default App;
