import "./App.css";
import Homes from './conponant/home';
import {Route,BrowserRouter as Router} from "react-router-dom";
import dashboardAdmin from "./conponant/dashboardAdmin";
import offreurAccount from "./conponant/offreurAccount";
import Fouter from './conponant/footer';
import FormAjoutAdmin from './conponant/FormAjoutAdmin';
import Offer from './conponant/offreurAccount';
function App() {
  return (
    <div>
      <Router>
    
      <Route path="/" exact component={Homes}/>
      <Route path="/dashboardAdmin" component={dashboardAdmin}/>
      <Route path="/offreurAccount" component={offreurAccount}/>
      <Route path="/admin" component={FormAjoutAdmin}/>
      <Route path="/card" component={Offer}/>
      
   

      </Router>
      

      </div>
       );
}

export default App;
