
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Paths/Home/Home';
import Courses from './components/Paths/Courses/Courses';
import Instructors from './components/Paths/Instructors/Instructors';
import AboutUs from './components/Paths/AboutUs/AboutUs';
import NotFound from './components/Paths/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/courses">
          <Courses></Courses>
        </Route>
        <Route path="/instructors">
          <Instructors></Instructors>
        </Route>
        <Route exact path="/aboutus">
          <AboutUs></AboutUs>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
