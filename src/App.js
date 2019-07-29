import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/global.css';
import file_icon from './assets/img/contract.png'; 
import search_icon from './assets/img/search.png'; 
import git_icon from './assets/img/git.png'; 
import Home from "./components/home.component";
import Search from "./components/search.component";
import Git from "./components/git.component";


export class App extends React.Component  {
    render() {
        return (<Router>
          <div className="nav">
            <ul className="vertical">
              <li>
                <Link to="/"><img className="img-responsive" src={file_icon} alt="Files" width="50"/></Link>
              </li>
              <li>
                <Link to="/search"><img className="img-responsive search" src={search_icon} alt="Search" width="50"/></Link>
              </li>
              <li>
                <Link to="/git"><img className="img-responsive" src={git_icon} alt="Git" width="50"/></Link>
              </li>
            </ul>
            </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact={true} path="/search" component={Search} />
            <Route  path="/git" component={Git} />
          </div>
        </Router>);
    }
}

export default App;
