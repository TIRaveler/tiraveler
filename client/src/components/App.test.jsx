import React from 'react';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import $ from 'jquery';

import App from './App';
import { businesses as events } from '../../../server/controllers/sample_data/events';

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('App page', () => {
  let app;

  beforeAll(() => {
    sinon.stub($, 'ajax').callsFake(({ success, url }) => {
      if (url === '/events/search') {
        success(events);
      }
    });
    app = shallow(<App />);
  });

  test('Can post selected photos and set events', () => {
    app.setState({ location: 'San Francisco', pictures: [] });
    app.instance().postSelectedTags();
    expect(app.state().events).toEqual(events);
  });
});
