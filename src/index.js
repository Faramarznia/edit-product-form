import 'assets/scss/style.scss'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { indexRoutes } from 'routes'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />
      })}
    </Switch>
  </BrowserRouter>,
)
