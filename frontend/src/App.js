import React from 'react'
import {  Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';

function App() {
  return (
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Switch>

              <Route path='/products/:id' component={ProductScreen}/>
              <Route exact path='/' component={HomeScreen}/>
              <Route path='/login' component={LoginScreen}/>
              <Route path='/register' component={RegisterScreen}/>
              <Route path='/profile' component={ProfileScreen}/>
              <Route path='/shipping' component={ShippingScreen}/>
              <Route path='/cart/:id?' component={CartScreen}/>

            </Switch>
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
