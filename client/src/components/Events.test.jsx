import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Events from './Events';
import Review from './Review';
import sampleEvents from '../../../server/controllers/sample_data/events';


describe('Events page', () => {
  /** The current budget */
  const budgetProp = 100;

  /** Sample place to search */
  const samplePlace = 'Here';

  /** Array holding all events */
  let eventsState = [];

  /** Array of all elements logged */
  let logArray = [];

  const mockLog = (...args) => {
    logArray.push(args);
  };

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
          log={mockLog}
          place={samplePlace}
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
    // Reset values
    eventsState = [];
    logArray = [];
  });

  // test('updates events on like and dislike', () => {
  //   // Click like
  //   firstLikeButton.simulate('click');

  //   // Expect state was updated
  //   expect(eventsState.length).toEqual(sampleEvents.length);

  //   // Reset event state
  //   eventsState = [];

  //   // Click dislike
  //   firstDislikeButton.simulate('click');

  //   // Expect state was update
  //   expect(eventsState.length).toEqual(sampleEvents.length);
  // });

  // test('like and dislike change userRating', () => {
  //   // Click like
  //   firstLikeButton.simulate('click');

  //   // Expect userRating is one
  //   expect(eventsState[0].userRating).toEqual(1);

  //   // Reset events state
  //   eventsState = [];

  //   // Click dislike
  //   firstDislikeButton.simulate('click');

  //   // Expect user rating is -1
  //   expect(eventsState[0].userRating).toEqual(-1);
  // });

  test('can get liked events', () => {
    // Get state
    const events = [
      {
        name: 'A liked event',
        userRating: 1,
        image_url: '',
      },
      {
        name: 'A neutral event',
        image_url: '',
      },
      {
        name: 'A disliked event',
        userRating: -1,
        image_url: '',
      },
    ];

    // Set props of events
    wrapEvents = mount(
      <MemoryRouter>
        <Events
          budget={budgetProp}
          events={events}
          log={mockLog}
          place={samplePlace}
          setEvents={setEventsStub}
        />
      </MemoryRouter>,
    ).find(Events);

    // Get liked photos
    const likedEvents = wrapEvents.find(Review).props().entries;
    expect(likedEvents).toEqual(events.slice(0, 1));
  });
});
