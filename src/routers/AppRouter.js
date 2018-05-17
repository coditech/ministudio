import React from 'react';
import {BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import App from '../Components/App';
import AboutPage from '../Components/AboutPage';
import NotFoundPage from '../Components/NotFoundPage'


const AppRouter = () => (
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={App} />
      <Route exact path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
      </Switch>
      </BrowserRouter>
);

export default AppRouter;