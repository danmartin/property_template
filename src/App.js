import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
/*-----pages-----*/
import {Home} from './Home';
import {Home2} from './Home2';
import {Home3} from './Home3';
import {Home4} from './Home4';

class App extends Component{
    
  render(){
    return(
        <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Home2" component={Home2} />
            <Route path="/Home3" component={Home3} />
            <Route path="/Home4" component={Home4} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
