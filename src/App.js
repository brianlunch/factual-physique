import React from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Home from './Pages/Home'
import { HashRouter } from 'react-router-dom'
import history from './Utils/History.jsx'

import './style.css'
//import './App.css'



  


function App() {

    
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL} history={history}>
        <Switch>
          <Route exact path={'/'}component={Home}/>
          

        </Switch>
      </HashRouter>
      
    </div>
  )
}

export default App