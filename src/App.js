import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import NotFound from './Notfound/NotFound';
import Footer from './Footer/Footer';
import About from './About/About';
import Login from './Login/Login/Login';
import Details from './Pages/Details/Details/Details';

import Contactus from './Contactus/Contactus';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
          <About></About>
          </Route>
          <Route exact path="/contactus">
            <Contactus></Contactus>
          </Route>

          <PrivateRoute exact path="/details/:id">
            <Details></Details>
         </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
          
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

      
    </AuthProvider>
  );
}

export default App;
