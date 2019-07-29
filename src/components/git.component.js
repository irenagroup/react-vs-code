import React from 'react';
import Filediff from "./filediff.component";
import { Route, Link } from "react-router-dom";


export const Git =( { match } ) => {
    return (
      <div className="git-content">
    <ul className="horizontal">
          <li>
            <Link to={{ pathname:`${match.url}/file1`, state: {fromNotif :'test'}}}>File 1</Link>
          </li>
          <li>
            <Link to={`${match.url}/file2`}>File 2</Link>
          </li>
          <li>
            <Link to={`${match.url}/file3`}>File 3</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:fileId`} component={Filediff} />
        
      </div>
    );
  }
  
  export default Git;
