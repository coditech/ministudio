import React from 'react';
import {BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import App from '../Components/App';
import AboutPage from '../Components/AboutPage';
import NotFoundPage from '../Components/NotFoundPage'
import Diy from '../Components/Diy'
import Zumba from '../Components/Zumba'
 

const AppRouter = () => (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={App} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/diy" component={Diy} />
      <Route exact path="/zumba" component={Zumba} />


      <Route component={NotFoundPage} />
      </Switch>
      </BrowserRouter>
);

export default AppRouter;