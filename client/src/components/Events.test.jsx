import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Events from './Events';
import sampleEvents from '../../../server/controllers/sample_data/events';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('Events page', () => {
  let wrapEvents;
  let setEventsStub;
  let eventState;

  beforeAll(() => {
    setEventsStub = (currentEvents) => {
      eventState = currentEvents;
    };

    wrapEvents = mount(<Events events={sampleEvents} setEvents={setEventsStub} />);
  });

  test('it can set props', () => {
    const { events, setEvents } = wrapEvents.props();
    expect(events).toEqual(sampleEvents);
    expect(setEvents).toEqual(setEvents);
  });
});
