import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FlatCard from './components/flat-card/flat-card'
import MapFilter from './components/map-filter/map-filter'
import MainPage from './components/main/mainPage'
import Filter from './components/filter/filter'
import FlatCardUser from './components/user/flat-card-user/flat-card-user'
import Profile from './components/user/profile/profile'
import LogIn from './components/logIn/logIn'
import Registration from './components/registration/registration'
import AdminPanel from './components/admin_panel/admin_panel'
import RentalModalComp from './components/add-rental/rentalModalComp'
import { PrivateRoute } from './components/user/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          exact path = "/"
          component = {MainPage}
        />
        <Route 
          path = "/flatcard"
          component = {FlatCard}
        />
        <Route
          path = "/mapfilter"
          component = {MapFilter}
        />
        <Route
          path = "/filter"
          component = {Filter}
        />
        <Route
          path = "/user/flatcard"
          component = {FlatCardUser}
        />
        {/* <Route
          path = "/user"
          component = {Profile}
        /> */}
        {/* <Route
          path = "/login"
          component = {LogIn}
        /> */}
        {/* <Route
          path = "/registration"
          component = {Registration}
        /> */}
        <Route
          path = "/admin-panel"
          component = {AdminPanel}
        />
        <Route
          path = "/add-rental"
          component = {RentalModalComp}
        />

        <PrivateRoute exact path="/user" component={Profile} />
        <Route path="/login" component={LogIn} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
