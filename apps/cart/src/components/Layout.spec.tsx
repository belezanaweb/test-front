import { BrowserRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Layout from './Layout';

describe('Layout', () => {
  it('should render children and footer content', () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <Layout />
        <Layout.Footer>
          <div>Footer Content</div>
        </Layout.Footer>
      </BrowserRouter>,
    );

    const footerContentElement = getByText('Footer Content');

    expect(footerContentElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should not render footer content if it doesn't exist", () => {
    const { queryByText } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );

    const footerContentElement = queryByText('Footer Content');

    expect(footerContentElement).not.toBeInTheDocument();
  });
});
