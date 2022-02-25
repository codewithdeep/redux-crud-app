import React from "react";
import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Products from "./components/products/Products";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import EditProduct from "./components/products/EditProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PersistGate persistor={persistor}>
          <div className="App">
            <ToastContainer />
            <Navbar />
            <div className="container">
              <div className="py-3">
                <Switch>
                  <Route exact path="/" component={Products} />
                  <Route exact path="/products/add" component={AddProduct} />
                  <Route
                    exact
                    path="/products/edit/:id"
                    component={EditProduct}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </PersistGate>
      </Router>
    </Provider>
  );
}

export default App;
