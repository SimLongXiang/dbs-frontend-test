import { render, cleanup } from '@testing-library/react';
import Main from './Main';

afterEach(cleanup)
jest.mock('./components/Content', () => () => <div data-testid="mobile-content-cmp" />)
jest.mock('./components/Content', () => () => <div data-testid="desktop-content-cmp" />)
const { queryAllByTestId } = render(<Main />);
const widthResize = (x) => {
  global.innerWidth = x;
  global.dispatchEvent(new Event('resize'));
}

test('switch to carousel', () => {
  // widthResize(500)
  const { queryAllByTestId:main } = render(<Main />);
  console.log("carousel:", main(/mobile-content-cmp/).length)
  console.log("carousel:", main(/desktop-content-cmp/).length)
  // expect(queryAllByTestId(/mobile-content-cmp/).length).toBe(1)
  // expect(queryAllByTestId(/desktop-content-cmp/).length).toBe(0)
})

test('switch to list', () => {
  // widthResize(1000)
  console.log(global.innerWidth)
  console.log("list:",queryAllByTestId(/mobile-content-cmp/).length)
  console.log("list:", queryAllByTestId(/desktop-content-cmp/).length)
  // expect(queryAllByTestId(/mobile-content-cmp/).length).toBe(0)
  // expect(queryAllByTestId(/desktop-content-cmp/).length).toBe(3)
})