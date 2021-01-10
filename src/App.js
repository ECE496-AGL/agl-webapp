import './App.css';
import Home from './containers/Home.js'
import Dashboard from './containers/Dashboard.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Switch>
          
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
