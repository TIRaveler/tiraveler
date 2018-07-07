import React from 'react';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import $ from 'jquery';

import App from './App';
import events from '../../../server/controllers/sample_data/events';

jest.useFakeTimers();

const { shallow } = Enzyme;

// Configure enzyme
Enzyme.configure({ adapter: new Adapter() });

// Use fake timers
jest.useFakeTimers();

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
    app.instance().sendSelectedPhotos();
    expect(app.state().events).toEqual(events);
  });

  test('can set and remove pop-up message', (done) => {
    // Add popup message
    app.instance().logPopUpMessage('Test');

    // Expect message added
    expect(app.state().popUpMessages).toEqual(['Test']);

    // Time to wait for message to clear
    const waitTime = app.instance().popUpInterval + 1000;

    setTimeout(() => {
      // Expect message was cleared
      expect(app.state().popUpMessages).toEqual([]);

      // Resolve promise
      done();
    }, waitTime);

    // Run advance till done
    jest.advanceTimersByTime(waitTime);
  });

  afterAll(() => {
    $.ajax.restore();
  });
});
