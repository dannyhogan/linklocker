import './App.scss';
import LandingPage from './components/LandingPage/LandingPage';
import { Switch, Route } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NavBar from './components/NavBar/NavBar';
import EditProfile from './components/EditProfile/EditProfile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/edit" component={EditProfile} />
        <Route path="/:username" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
