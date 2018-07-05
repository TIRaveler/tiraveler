import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { stub } from 'sinon';

import Photos from './Photos';
import sampleServerPhotos from '../../../server/controllers/sample_data/photos';
import samplePhotos from './sample_data/photos';

Enzyme.configure({ adapter: new Adapter() });

const { mount } = Enzyme;

describe('Photos', () => {
  /**
   * Default location state
   */
  const defaultLocationState = 'Los Angles';

  /**
   * Mock of the location state
   */
  let locationState;

  /**
   * Mock of the picture state
   * @type {[*]}
   */
  let picturesState;

  /**
   * Mock setting location state
   * @param {*}   event              Event object
   * @param {*}   event.taget        Target object
   * @param {[*]} event.target.value New pictures
   */
  const mockSendSelectedPhotos = (event) => {
    picturesState = event.target.value;
  };

  /**
   * Mock sending selected photos
   * @param {*}   event              Event object
   * @param {*}   event.target       Target object
   * @param {[*]} event.target.value New pictures
   */
  const mockSetPictures = (event) => {
    picturesState = event.target.value;
  };

  let wrapPhotos;

  beforeAll(() => {
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

    wrapPhotos = mount(
      <BrowserRouter>
        <Photos
          location={defaultLocationState}
          pictures={samplePhotos}
          setPictures={mockSetPictures}
          sendSelectedPhotos={mockSendSelectedPhotos}
        />
      </BrowserRouter>,
    ).find(Photos);
  });

  beforeEach(() => {
    locationState = defaultLocationState;
    picturesState = samplePhotos;
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

  afterAll(() => {
    window.fetch.restore();
  });
});
