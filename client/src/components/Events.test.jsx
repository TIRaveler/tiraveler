import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

import Events from './Events';
import sampleEvents from '../../../server/controllers/sample_data/events';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('Events page', () => {
  /** The current budget */
  const budgetProp = 100;

  /** Array holding all events */
  let eventsState = [];

  /**
   * Stub for setting events
   * @type {(events: [{target: {value: *}}]) => undefined}
   */
  let setEventsStub;

  /** Browser for routing */
  let wrapBrowser;

  /** React events page */
  let wrapEvents;

  /** First like button on page */
  let firstLikeButton;

  /** First dislike button on page */
  let firstDislikeButton;

  beforeAll(() => {
    setEventsStub = (event) => {
      eventsState = event.target.value;
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

    // Get events
    wrapEvents = wrapBrowser.find(Events);

    // Get first like button
    firstLikeButton = wrapEvents.find('[positive] > button').at(0);

    // Get first dislike button
    firstDislikeButton = wrapEvents.find('[negative] > button').at(0);
  });

  beforeEach(() => {
    eventsState = [];
  });

  test('updates events on like and dislike', () => {
    // Click like
    firstLikeButton.simulate('click');

    // Expect state was updated
    expect(eventsState.length).toEqual(sampleEvents.length);

    // Reset event state
    eventsState = [];

    // Click dislike
    firstDislikeButton.simulate('click');

    // Expect state was update
    expect(eventsState.length).toEqual(sampleEvents.length);
  });

  test('like and dislike change userRating', () => {
    // Click like
    firstLikeButton.simulate('click');

    // Expect userRating is one
    expect(eventsState[0].userRating).toEqual(1);

    // Reset events state
    eventsState = [];

    // Click dislike
    firstDislikeButton.simulate('click');

    // Expect user rating is -1
    expect(eventsState[0].userRating).toEqual(-1);
  });
});
