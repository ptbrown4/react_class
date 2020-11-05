import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Items from './views/Items';
import Alerts from './views/Alerts';
import Activities from './views/Activities';
import Users from './views/Users';

function Routes() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/alerts" component={Alerts} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/users" component={Users} />
        </Switch>
    )
}

export default Routes;
