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
    stub(axios, 'get').resolves(eventData);
  });

  beforeEach(() => {
    res = {
      send: spy(function send(data) {
        this.data = data;
      }),
      status: spy(function status(statusCode) {
        this.statusCode = statusCode;
      }),
    };
  });

  test('returns response', async () => {
    await eventController.search(reqSample, res);
    expect(res.send.callCount).toEqual(1);
  });

  test('returns events', async () => {
    await eventController.search(reqSample, res);
    expect(res.data).toEqual(eventData.businesses);
  });

  test('returns 400 if missing location', async () => {
    const reqMissing = Object.assign(reqSample);
    reqMissing.body.location = undefined;

    await eventController.search(reqMissing, res);
    expect(res.statusCode).toEqual(400);
    expect(res.data).toEqual(undefined);
  });

  test('returns 400 if missing pictures', async () => {
    const reqMissing = Object.assign(reqSample);
    reqMissing.body.pictures = undefined;

    await eventController.search(reqMissing, res);
    expect(res.statusCode).toEqual(400);
    expect(res.data).toEqual(undefined);
  });

  afterAll(() => {
    axios.get.restore();
  });
});
