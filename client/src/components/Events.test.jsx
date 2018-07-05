import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

import Events from './Events';
import sampleEvents from '../../../server/controllers/sample_data/events';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('Events page', () => {
  const budgetProp = 100;
  let eventState = [];
  let setEventsStub;
  let wrapBrowser;
  let wrapEvents;

  beforeAll(() => {
    setEventsStub = (currentEvents) => {
      eventState = currentEvents;
    };

    wrapBrowser = mount(
      <MemoryRouter>
        <Events
          budget={budgetProp}
          events={sampleEvents}
          setEvents={setEventsStub}
        />
      </MemoryRouter>,
    );

    wrapEvents = wrapBrowser.find(Events);
  });

  beforeEach(() => {
    eventState = [];
  });

  test('updates events on like and dislike', () => {
    // Get first like button
    const firstEventLikeButton = wrapEvents.find('[positive] > button').at(0);

    // Click like
    firstEventLikeButton.simulate('click');

    // Expect state was updated
    expect(eventState.length).toEqual(sampleEvents.length);

    // Reset event state
    eventState = [];

    // Get first dislike button
    const firstEventDislikeButton = wrapEvents.find('[negative] > button').at(0);

    // Click dislike
    firstEventDislikeButton.simulate('click');

    // Expect state was update
    expect(eventState.length).toEqual(sampleEvents.length);
  });
});
