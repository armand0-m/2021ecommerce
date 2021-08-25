import Navbar from './components/Navbar';
import './App.css';
import Products from './components/Products';
//import Product from './components/Product';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
//import CheckoutCard from './components/CheckoutCard';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <h1 align="center">TIENDA EN LINEA</h1>
      <Switch>
        <Route exact path="/" component={Products}>
        {/*<Products/>*/}
        </Route>
        <Route exact path="/checkout-page" component={CheckoutPage}>
        {/*<CheckoutPage/>*/}
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
