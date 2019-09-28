import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Index from './Pages/index'
import Index2 from './Pages/Index2';


function App() {
  return (
    <Router>
      <Route exact path="/" exact component={Index} />
      <Route path="/products" component={Index2} />
    </Router>
  )
}
export default App;
