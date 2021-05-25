import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import OrderScreen from "./screens/OrderScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

function App() {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Switch>
						<Route path='/products/:id' component={ProductScreen} />
						<Route exact path='/' component={HomeScreen} />
						<Route path='/login' component={LoginScreen} />
						<Route path='/register' component={RegisterScreen} />
						<Route path='/profile' component={ProfileScreen} />
						<Route path='/shipping' component={ShippingScreen} />
						<Route path='/payment' component={PaymentScreen} />
						<Route path='/placeorder' component={PlaceOrderScreen} />
						<Route path='/order/:id' component={OrderScreen} />
						<Route path='/cart/:id?' component={CartScreen} />
					</Switch>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
