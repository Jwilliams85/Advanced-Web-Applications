// Login -> Token-> local Storage, the pupose of token is to let us into private or protected routes. 

import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import Header from "./components/Header.js";
import PrivateRoute from "./components/utils/PrivateRoute";
import AnimalDashboard from "./components/AnimalDashboard";
import AddAnimal from "./components/AddAnimal";

export default function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Build out a Private Route for both Animal Dashboard + Add Animal*/}
        <PrivateRoute exact path = '/creatures'><AnimalDashboard/></PrivateRoute>
        {/* <PrivateRoute exact path = '/creatures' component={AnimalDashboard}/> */}
        <PrivateRoute exact path = '/add'><AddAnimal/></PrivateRoute>
        {/* <PrivateRoute exact path = '/add' component={AddAnimal}/> */}
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};
