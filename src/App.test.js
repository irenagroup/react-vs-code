import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home.component';
import Search from './components/search.component';
import Git from "./components/git.component";

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("App", () => {

  let element;
  beforeEach(() => {
    element = <App />
  });


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('routes / to Home View', () => {
    const component = shallow(element);
    expect(component.find('Route[exact=true][path="/"]').first().prop('component')).toBe(Home);
  });

  it('routes /search to Search View', () => {
    const component = shallow(element);
    expect(component.find('Route[exact=true][path="/search"]').first().prop('component')).toBe(Search);
  });

  it('routes /git to Git View', () => {
    const component = shallow(element);
    expect(component.find('Route[path="/git"]').first().prop('component')).toBe(Git);
  });


});


