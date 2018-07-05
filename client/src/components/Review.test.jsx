import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import $ from 'jquery';
import { stub } from 'sinon';

import Review from './Review';
import sampleEntries from '../../../server/controllers/sample_data/events';

Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

describe('Review', () => {
  let wrapBrowser;
  let wrapReview;

  beforeAll(() => {
    // Stub Ajax post
    stub($, 'post').callsFake((url, { itin }) => (
      new Promise((resolve, reject) => {
        if (url === '/itinerary/save') {
          if (Array.isArray(itin)) {
            resolve('Success');
          }
        }

        reject(new Error('Invalid request'));
      })
    ));

    // Create router
    wrapBrowser = mount(
      <MemoryRouter>
        <Review entries={sampleEntries} />
      </MemoryRouter>,
    );

    // Get review
    wrapReview = wrapBrowser.find(Review);
  });

  test('can set props', () => {
    // Get entries
    const { entries } = wrapReview.props();

    // Test is sample entries
    expect(entries).toEqual(sampleEntries);
  });

  afterAll(() => {
    // Restore Ajax post
    $.post.restore();
  });
});
