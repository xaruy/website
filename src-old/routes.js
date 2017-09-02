import React from 'react';
import { Route, browserHistory } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';
import ReactGA from 'react-ga';

import {pkg, layoutNames} from './metadata';

import AppContainer from './layout/AppContainer';
import Page from './pages/Page';
import PageError from './pages/PageError';
import Post from './pages/Post';
import Project from './pages/Project';
import ListPage from './pages/ListPage';
import HomePage from './pages/HomePage';

if (browserHistory) {
  ReactGA.initialize(pkg.ga);
}

const change = (loc) => {
  ReactGA.set({page: loc.pathname});
  ReactGA.pageview(loc.pathname);
};

const layoutList = {
  Page,
  PageError,
  Post,
  HomePage,
  Project,
  ListPage
};

// Add friendly names of pages to metadata
Object.keys(layoutList).forEach((key) => {
  if (layoutList[key].type) {
    layoutNames[key] = layoutList[key].type;
  }
});

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={layoutList}
  />
);

export default (
  <Route 
    component={ AppContainer }
    onChange={(prevState, nextState, replace) => {
      change(nextState.location);
      return true;
    }}
    onEnter={(nextState) => {
      change(nextState.location);
      return true;
    }}>
    <Route path="*" component={ PageContainer } />
  </Route>
);