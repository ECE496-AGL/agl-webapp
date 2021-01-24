import React from 'react';
import { Route, Switch} from 'react-router-dom';
import sampleComponent from './components/sampleComponent/sampleComponent'
import './App.css';

function App() {
  return (
    <Switch>
      <Route path ="/" component={sampleComponent}/>
    </Switch>
  );
}

export default App;
