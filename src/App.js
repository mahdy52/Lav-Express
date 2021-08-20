import "./App.css";
import Homes from './conponant/home';
import Offre from './conponant/home';
import Users from './conponant/home';
import {Route,BrowserRouter as Router} from "react-router-dom";
import dashboardAdmin from "./conponant/dashboardAdmin";
import Offer from "./conponant/offreurAccount";

function App() {
  return (
    <div>
      <Router>
    
       <Route path="/" exact component={Homes}/>
      <Route path="/Offre"  component={Offre}/>
      <Route path="/Users"  component={Users}/>
      <Route path="/dashboardAdmin" component={dashboardAdmin}/>
      <Route path="/offreurAccount" component={Offer}/>
      {/* <Route path="/from" component={FormAjoutAdmin}/> */}
      <Route path="/card" component={Offer}/>
      
      
      

      </Router>
      

      </div>
       );
}

export default App;
