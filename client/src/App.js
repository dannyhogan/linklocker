import './App.scss';
import LandingPage from './containers/LandingPage/LandingPage';
import { Switch, Route } from 'react-router-dom'
import SignUp from './containers/SignUp/SignUp'
import Login from './containers/Login/Login'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Contact from './containers/Contact/Contact';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NavBar from './components/NavBar/NavBar';
import EditProfile from './containers/EditProfile/EditProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
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
