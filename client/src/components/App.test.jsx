import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import $ from 'jquery';

import App from './App';
import events from '../../../server/controllers/sample_data/events';

// Use fake timers
jest.useFakeTimers();

describe('App page', () => {
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
  });

  test('can use superFunction to set state', () => {
    const app = shallow(<App />);
    const setEvents = app.instance().superFunction('events');
    setEvents({ target: { value: events } });
    expect(app.state().events).toEqual(events);
  });

  test('can post selected photos and set events', () => {
    const app = shallow(<App />);
    // Give app one selected photo
    app.setState({
      location: 'Here',
      pictures: [{
        isSelected: true,
      }],
    });

    // Send the selected photos
    const history = [];
    app.instance().sendSelectedPhotos(history);
    // Test navigates to history page
    expect(history).toEqual(['/events']);
    // Test events are added
    expect(app.state().events).toEqual(events);
  });

  test('can set and remove pop-up message', (done) => {
    const app = shallow(<App />);
    app.setState({ popUpMessages: [] });
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
