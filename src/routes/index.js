import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import App from "../components/App"
import Map from "../components/map"

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />>
      <Route path="/weathermap" component={Map} />
    </Switch>
  </Router>
)
