import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filediff from './filediff.component';

configure({ adapter: new Adapter() });
describe("FileDiff", () => {
    it('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Filediff match={{ params: { fileId: '1111' } }} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});
