import React from 'react'
import ReactDOM from 'react-dom'

import { Route, Switch } from 'react-router'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'

import configureStore from './store'
import { createRoutes } from './routes'
import './styles/base.css'

export const history = createHistory()
export const store = configureStore(history, {})
const routes = createRoutes(store)
moment.locale('zh-cn')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          {routes.map(r => <Route key={r.path || Math.random()} {...r} />)}
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('appCloudMirror')
)
