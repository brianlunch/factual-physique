//libraries
import React from 'react'
import { Route, Switch} from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

//pages
import Home from './pages/home/Home';

//utils
import history from './utils/History.js'

//styles & assets
import './style.css'



const App = () => {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL} history={history}>
        <Switch>
          <Route exact path={'/'} component={Home}/>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App