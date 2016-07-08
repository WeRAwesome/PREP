import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Biological from "./pages/Biological";
import Climatological from "./pages/Climatological";
import Geophysical from "./pages/Geophysical";
import HumanMade from "./pages/HumanMade";
import Hydrological from "./pages/Hydrological";
import SelfHelpTech from "./pages/Self-HelpTechnology";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path='/hydro' component={Hydrological} />
            <Route path='/geo' component={Geophysical} />
            <Route path='/climato' component={Climatological} />
            <Route path='/bio' component={Biological} />
            <Route path='/manmade' component={HumanMade} />
            <Route path='/selfhelp' component={SelfHelpTech} />
        </Route>
    </Router>,
    app);
