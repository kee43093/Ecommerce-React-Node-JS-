import React from 'react';

import './App.css'

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './Pages/index'
import Index2 from './Pages/Index2'
import Index3 from './Pages/index3'

function App() {
  return (
    <Router>
      <Route exact path="/" exact component={Index} />
      <Route path="/products" component={Index2} />
      <Route path="/Contact" component={Index3}/>
    </Router>
  )
}
export default App;
