import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Search from './Search';

describe('Search', () => {
  /** Sample username */
  const sampleName = 'TIRaveler';

  /**
   * The current app state
   * @prop {number} budget   The current budget
   * @prop {string} location The current location
   */
  const mockAppState = {
    budget: 100,
    location: 'Los Angles',
  };

  /**
   * The set budget state value
   * @type {number | undefined}
   */
  let mockBudgetState;

  /**
   * The set location state value
   * @type {string | undefined}
   */
  let mockLocationState;

  /**
   * @type {Enzyme.ReactWrapper}
   */
  let wrapSearch;

  /**
   * Set budget state
   * @param {*}      event              Event object
   * @param {*}      event.target       Target object
   * @param {number} event.target.value Value of budget
   */
  const mockHandleBudget = (event) => {
    mockBudgetState = event.target.value;
  };

  /**
   * Set location state
   * @param {*}      event              Event object
   * @param {*}      event.target       Target object
   * @param {string} event.target.value Value of location
   */
  const mockHandleLocation = (event) => {
    mockLocationState = event.target.value;
  };

  beforeAll(() => {
    // Uses routing, must wrap in router
    wrapSearch = mount(
      <MemoryRouter>
        <Search
          appState={mockAppState}
          handleBudget={mockHandleBudget}
          handleLocation={mockHandleLocation}
          name={sampleName}
        />
      </MemoryRouter>,
    ).find(Search);
  });

  beforeEach(() => {
    // Reset state
    mockBudgetState = undefined;
    mockLocationState = undefined;
  });

  test('it sets props', () => {
    const { appState, handleBudget, handleLocation } = wrapSearch.props();
    expect(appState).toEqual(mockAppState);
    expect(handleBudget).toEqual(mockHandleBudget);
    expect(handleLocation).toEqual(mockHandleLocation);
  });

  test('it updates budget on entering text', () => {
    const aBudget = 100;
    const inputBudget = wrapSearch.find('#input-budget').at(1);
    inputBudget.simulate('change', { target: { value: aBudget.toString() } });
    expect(mockBudgetState).toEqual(aBudget);
  });

  test('it updates location on entering text', () => {
    const aLocation = 'Los Angles';
    const inputLocation = wrapSearch.find('#input-location').at(1);
    inputLocation.simulate('change', { target: { value: aLocation } });
    expect(mockLocationState).toEqual(aLocation);
  });
});
