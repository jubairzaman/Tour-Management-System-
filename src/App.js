import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import MyEvents from "./pages/myEvents/MyEvents";
import RegisterEvent from "./pages/registerEvent/RegisterEvent";
import SignIn from "./pages/signIn/SignIn";
import Nav from "./shared/nav/Nav";
import PrivateRoute from "./shared/privateRoute/PrivateRoute";
import AddServices from "./AddServices/AddServices";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <PrivateRoute exact path="/register/:eventName">
            <RegisterEvent />
          </PrivateRoute>
          <PrivateRoute exact path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute exact path="/addservice">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute exact path="/myEvents">
            <MyEvents />
          </PrivateRoute>
        </Switch>
      </Router>
      <Footer></Footer>
    </AuthProvider>

  );
}

export default App;
