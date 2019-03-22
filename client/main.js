import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import 'normalize.css';
import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(
    <Router>
      <App />
    </Router>, document.getElementById('render-target'));
});
