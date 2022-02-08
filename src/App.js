import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home')); 
const AddUser = React.lazy(() => import('./pages/AddUser')); 

const App = () => {

    

  return(
    
    <Router>
      <Suspense fallback={()=> <h2>Loading...</h2>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/add-user' component={AddUser} />
          </Switch>
      </Suspense>
    </Router>
  )
}


export default App;
