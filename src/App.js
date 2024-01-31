import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home-page'
import { Calculator } from './pages/calculator'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
