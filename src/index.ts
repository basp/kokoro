/// <reference path="../typings/tsd.d.ts" />

import m = require('mithril');
import App = require('./components/app');

m.module(document.body, new App());