/* eslint
 import/no-extraneous-dependencies: 0
*/

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Setup enzyme
Enzyme.configure({ adapter: new Adapter() });
