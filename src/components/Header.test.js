import { render, cleanup } from '@testing-library/react';
import Header from './Header';

afterEach(cleanup)

const { getByText, queryByTestId } = render(<Header />);
const widthResize = (x) => {
  global.innerWidth = x;
  global.dispatchEvent(new Event('resize'));
}

test('renders correct header', () => {  getByText("How it works"); })

test('show collapse button on mobile view', () => {
  widthResize(500)
  queryByTestId(/collapse-btn/)
})

test('hide collapse button on desktop view', () => {
  widthResize(1000)
  expect(queryByTestId(/collapse-btn/)).toBe(null);
})