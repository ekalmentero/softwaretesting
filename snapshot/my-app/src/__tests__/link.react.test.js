import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.ufrrj.br">Site da UFRRJ</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
