import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FlatCard from './components/flat-card/flat-card'
import MapFilter from './components/map-filter/map-filter'
import MainPage from './components/main/mainPage'
import Filter from './components/filter/filter'

import FlatCardUser from './components/user/flat-card-user/flat-card-user'

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
          // exact 
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
        {/* <Route path="/sort1" component={Sort1} />
        <Route path="/sort2" component={Sort2} />
        <Route path="/favorite" component={Favorite} /> */}
      </Switch>
    </div>
  );
}

export default App;
