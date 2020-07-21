import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Reposiory from '../pages/Repository';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/repository/:repository+" component={Reposiory} />
    </Switch>
  );
};

export default Routes;
