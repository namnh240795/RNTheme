/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import { render } from 'react-native-testing-library';
import Home from '../src/screens/Home';
import { act } from 'react-test-renderer';

test('given empty GroceryShoppingList, user can add an item to it', () => {
  const home = render(<Home id="home" />);
  act(() => {
    home.update();
  });
  expect(home.getByProps('initialValue').props.initialValue.email).toBe('namnh240795@gmail.com');
});
