import { render } from '@testing-library/react';
import App from './App';

jest.mock('./main', () => () => <div data-testid="main-cmp" />)
test('renders main component', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId(/main-cmp/)).toBeInTheDocument();
});
