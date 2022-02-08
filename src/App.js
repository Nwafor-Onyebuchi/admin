import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

const Home = React.lazy(() => import('./pages/Home')); 
const AddUser = React.lazy(() => import('./pages/AddUser')); 

const App = () => {

    

  return(
    
    <Router>
    <Provider store={store}>
    <Suspense fallback={()=> <h2>Loading...</h2>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/add-user' component={AddUser} />
          </Switch>
      </Suspense>
    </Provider>
      
    </Router>
  )
}


export default App;
