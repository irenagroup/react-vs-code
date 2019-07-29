import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Git from './search.component';


configure({ adapter: new Adapter() });

describe("Git", () => {

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Git />, div);
  ReactDOM.unmountComponentAtNode(div);
});

});
