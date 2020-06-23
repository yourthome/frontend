import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FlatCard from './components/flat-card/flat-card'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          path = "/flatcard"
          component = {FlatCard}
          // exact 
        />
        {/* <Route
          path = "/"
          component = {MainPage}
        /> */}
        {/* <Route path="/sort1" component={Sort1} />
        <Route path="/sort2" component={Sort2} />
        <Route path="/favorite" component={Favorite} /> */}
      </Switch>
    </div>
  );
}

export default App;
