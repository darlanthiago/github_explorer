import React from 'react';

import Dashboard from '../pages/Dashboard';
import Reposiory from '../pages/Repository';
import { Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/repository" component={Reposiory} />
    </Switch>
  );
};

export default Routes;
