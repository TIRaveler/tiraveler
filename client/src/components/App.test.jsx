import React from 'react';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import $ from 'jquery';

import App from './App';
import events from '../../../server/controllers/sample_data/events';

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('App page', () => {
  let app;

  beforeAll(() => {
    const handleRoutes = (url, data, success) => {
      if (url === '/events/search') {
        if (typeof data.location === 'string' && Array.isArray(data.pictures)) {
          success(events);
        }
      }
    };

    sinon.stub($, 'ajax').callsFake(({ data, url, success }) => {
      handleRoutes(url, data, success);
    });
    sinon.stub($, 'post').callsFake((url, data, success) => {
      handleRoutes(url, data, success);
    });

    app = shallow(<App />);
  });

  test('can use superFunction to set state', () => {
    const setEvents = app.instance().superFunction('events');
    setEvents({ target: { value: events } });
    expect(app.state().events).toEqual(events);
  });

  test('can post selected photos and set events', () => {
    app.setState({ location: 'San Francisco', pictures: [] });
    app.instance().postSelectedTags();
    expect(app.state().events).toEqual(events);
  });

  afterAll(() => {
    $.ajax.restore();
  });
});
