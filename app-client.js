var React = require('react');
var ReactDom = require('react-dom');

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import { browserHistory } from 'react-router'

var APP = require('./components/APP');
var Audience = require('./components/audience');
var Speaker = require('./components/speaker');
var Board = require('./components/board');



ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={APP}>
	    <IndexRoute component={Audience} />
	    <Route path="audience" component={Audience} />
	    <Route path="speaker" component={Speaker} />
	    <Route path="board" component={Board} />
    </Route>


  </Router>
), document.getElementById('root'));




