/// <reference path="../typings/tsd.d.ts" />

import m = require('mithril');
import Dashboard = require('./components/dashboard');

m.module(document.body, new Dashboard());