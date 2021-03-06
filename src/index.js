import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import ReduxPromise from "redux-promise"

import App from "./components/App"
import reducers from "./reducers"

import Route from "../src/routes/index"

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}
    <Route />
  </Provider>,
  document.querySelector(".container1")
)
