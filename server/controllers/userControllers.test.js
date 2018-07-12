import userController from './userControllers';

jest.mock('../../db/index');

describe('User controller', () => {
  class Res {
    status(statusCode) {
      this.statusCode = statusCode;
      return this;
    }

    send(data) {
      this.data = data;
      return this;
    }
  }

  test('it is defined with desired API functions', () => {
    expect(userController).toBeDefined();
    expect(userController.checkUser).toBeInstanceOf(Function);
    expect(userController.getItineraries).toBeInstanceOf(Function);
    expect(userController.logout).toBeInstanceOf(Function);
    expect(userController.signup).toBeInstanceOf(Function);
  });

  test('Can get itineraries', () => {
    // Define request and response
    const req = {
      session: {
        user: {
          id: 1,
        },
      },
    };

    const res = new Res();

    // Expect response of itineraries
    userController.getItineraries(req, res);
    expect(res.statusCode).toEqual(200);
    expect(res.data).toEqual([]);
  });
});
