import React, { Suspense, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLoader from './components/layouts/partials/mainLoader'

// files
import './App.css';
import 'react-toastify/dist/ReactToastify.css';



//components
const NotFound = React.lazy(() => import('./components/public/404'));
const NewToken = React.lazy(() => import('./components/public/Home'));
const RoadMap = React.lazy(() => import('./components/public/RoadMap'));
const TokenPage = React.lazy(() => import('./components/public/Token'));
// const TokenPage = 

const App = () => {

    

  return(
    
    <Router>

      <Suspense fallback={MainLoader()}>
          <Switch>
            <Route exact path='/' component={NewToken} />
            <Route exact path='/roadmap' component={RoadMap} />
            <Route exact path='/token' component={TokenPage} />
            
            <Route exact path="*" component={NotFound} />
          </Switch>
      </Suspense>

    </Router>

  )
}

export default App;
