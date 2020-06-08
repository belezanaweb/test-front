import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import 'jest-styled-components';

import Box, { Flex, Grid } from './Box';

describe('<Grid />', () => {
  it('should render a Grid content with two Boxes', () => {
    const { container } = render(
      <Grid>
        <Box>Box</Box>
        <Box>Box</Box>
      </Grid>
    );

    expect(container).toMatchSnapshot();
  });
});

describe('<Flex />', () => {
  it('should render a Flex content with two Boxes', () => {
    const { container } = render(
      <Flex>
        <Box>Box</Box>
        <Box>Box</Box>
      </Flex>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render a Flex with display inline-flex', () => {
    const { container } = render(
      <Flex inline>
        <Box>Box</Box>
        <Box>Box</Box>
      </Flex>
    );

    expect(container).toMatchSnapshot();
  });
});

describe('<Box />', () => {
  it('should render Box', () => {
    const { container } = render(<Box>Box</Box>);

    expect(container).toMatchSnapshot();
  });
});
