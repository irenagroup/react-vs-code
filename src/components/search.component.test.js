
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.component';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("search", () => {

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
it('should render to search when default route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <Search/>
      </MemoryRouter>
    );
    expect(wrapper.find('.search-content')).toHaveLength(1);
  });

});