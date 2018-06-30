import axios from 'axios';
import { spy, stub } from 'sinon';
import eventController from './eventControllers';
import eventData from './sample_data/events';

const reqSample = {
  body: {
    location: 'San Francisco',
    pictures: [],
  },
};

describe('Event controller', () => {
  let res;

  beforeAll(() => {
    stub(axios, 'get').yields(null, eventData);
  });

  beforeEach(() => {
    res = {
      send: spy(function send(data) {
        this.data = data;
      }),
    };
  });

  test('returns response', async () => {
    await eventController.search(reqSample, res);
    expect(res.send.callCount).toEqual(1);
  });

  test('returns events', async () => {
    await eventController.search(reqSample, res);
    expect(res.send.data).toEqual(eventData);
  });

  afterAll(() => {
    axios.restore();
  });
});
