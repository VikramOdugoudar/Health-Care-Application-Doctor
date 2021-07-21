import "./App.css";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import PatientProfile from "./pages/PatientProfile";
import DoctorProfile from "./pages/DoctorProfile";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route path="/" component={AboutPage} exact />
        <Route path="/login" component={Login} exact />
		    <Route path="/patientProfile" component={PatientProfile} exact />
        <Route path="/doctorProfile" component={DoctorProfile} exact />
      </Switch>
    </div>
  );
}

export default App;
