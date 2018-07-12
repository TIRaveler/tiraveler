import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { stub } from 'sinon';

import Photos from './Photos';
import { getDifferentKeysAndTypes } from '../../../testUtils/objectUtils';
import sampleServerPhotos from '../../../server/controllers/sample_data/photos';
import samplePhotos from './sample_data/photos';

describe('Photos', () => {
  /**
   * Default location state
   */
  const defaultLocationState = 'Los Angles';

  /**
   * Mock of the picture state
   * @type {[*]}
   */
  let picturesState = [];

  /**
   * Mock setting location state
   * @param {*}   event              Event object
   * @param {*}   event.taget        Target object
   * @param {[*]} event.target.value New pictures
   */
  const mockSendSelectedPhotos = stub();

  /**
   * Mock sending selected photos
   * @param {*}   event              Event object
   * @param {*}   event.target       Target object
   * @param {[*]} event.target.value New pictures
   */
  const mockSetPictures = (event) => {
    picturesState = event.target.value;
  };

  let wrapBrowser;
  let wrapPhotos;

  beforeAll(() => {
    // Stub fetch API
    window.fetch = stub().callsFake((url, { method, body }) => (
      new Promise((resolve, reject) => {
        if (url === '/photos/search' && method === 'POST') {
          const parsedBody = JSON.parse(body);
          if (typeof parsedBody.location === 'string') {
            resolve({
              json: () => sampleServerPhotos,
            });
          }
        }

        reject(new Error('Bad fetch path'));
      })
    ));

    // Mount Photos with Browser Router
    wrapBrowser = mount(
      <MemoryRouter>
        <Photos
          location={defaultLocationState}
          pictures={samplePhotos}
          setPictures={mockSetPictures}
          sendSelectedPhotos={mockSendSelectedPhotos}
        />
      </MemoryRouter>,
    );

    // Get photos object
    wrapPhotos = wrapBrowser.find(Photos);
  });

  beforeEach(() => {
    picturesState = [];
    // Reset stub
    mockSendSelectedPhotos.reset();
  });

  test('it sets props', () => {
    const {
      location,
      pictures,
      setPictures,
      sendSelectedPhotos,
    } = wrapPhotos.props();

    expect(location).toEqual(defaultLocationState);
    expect(pictures).toEqual(samplePhotos);
    expect(setPictures).toEqual(mockSetPictures);
    expect(sendSelectedPhotos).toEqual(mockSendSelectedPhotos);
  });

  test('mounting fetches and parses photos', () => {
    // A sample photo
    const samplePhoto = samplePhotos[0];

    // Call componentDidMount and update picture state
    wrapBrowser.mount();

    // Compare picture with sample data
    picturesState.forEach((picture) => {
      // Compare has same keys and data types
      expect(getDifferentKeysAndTypes(samplePhoto, picture)).toEqual({});
    });
  });

  test('can toggle pictures', () => {
    const aCheckBox = wrapPhotos.find('input[type="checkbox"]').at(0);

    aCheckBox.simulate('change', { target: { checked: true } });

    expect(picturesState[0].isSelected).toEqual(true);
  });

  test('can submit pictures', () => {
    const submitButton = wrapPhotos.find('#submit').at(0);

    expect(submitButton.length).toEqual(1);

    // Click button
    submitButton.simulate('click');

    // Test send pictures called once
    expect(mockSendSelectedPhotos.callCount).toEqual(1);
  });

  afterAll(() => {
    window.fetch.restore();
  });
});
