import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import $ from 'jquery';
import { stub } from 'sinon';

import Review from './Review';
import sampleEntries from '../../../server/controllers/sample_data/events';

describe('Review', () => {
  /** Sample itinerary information */
  const sampleItin = {
    name: 'Some test itin',
  };

  /** Array of all elements logged */
  let logArray = [];

  /** Sample logging function */
  const sampleLog = (...args) => {
    logArray.push(args);
  };

  /**
   * Sample username
   */
  const sampleName = 'TIRaveler';

  /**
   * Sample place
   */
  const samplePlace = 'Here';
  /**
   * Events sent to server
   */
  let sentEvents = [];

  /**
   * Itinerary information sent to server
   */
  let sentItin = {};

  const getShallowReviewWithRouter = aReview => (
    shallow(
      <MemoryRouter>
        {aReview}
      </MemoryRouter>,
    ).find(Review)
  );

  beforeAll(() => {
    // Stub Ajax post
    stub($, 'post').callsFake((url, { itin, events }) => (
      new Promise((resolve, reject) => {
        if (url === '/itinerary/save') {
          if (Array.isArray(events) && typeof itin === 'object') {
            sentEvents = events;
            sentItin = itin;
            resolve('Success');
          }
        }


        reject(new Error('Invalid request'));
      })
    ));
  });

  beforeEach(() => {
    // Reset sent items
    sentEvents = [];
    sentItin = {};
    logArray = [];
  });

  test('can set props', () => {
    // Shallow render review
    const wrapReview = getShallowReviewWithRouter(<Review
      entries={sampleEntries}
      log={sampleLog}
      name={sampleName}
      place={samplePlace}
    />);

    // Get entries
    const { entries } = wrapReview.props();

    // Test is sample entries
    expect(entries).toEqual(sampleEntries);
  });

  test('finalize sends events', () => {
    // Shallow render review
    const wrapReview = getShallowReviewWithRouter(<Review
      entries={sampleEntries}
      log={sampleLog}
      name={sampleName}
      place={samplePlace}
    />).dive();

    // Set itinerary
    wrapReview.setState({ itin: sampleItin });

    // Call finalize on state review
    wrapReview.instance().finalize();

    // Expect sent data
    expect(sentEvents).toEqual(sampleEntries);
    expect(sentItin).toEqual(sampleItin);
  });

  afterAll(() => {
    // Restore Ajax post
    $.post.restore();
  });
});
