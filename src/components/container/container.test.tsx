import { render, screen } from '@testing-library/react';
import Container from '.';

test('Search textbox is empty upon initial page load', () => {
  render(<Container />);
  const textbox = screen.getByRole('textbox');
  expect(textbox).toHaveValue('');
});


test('Expect header title on the page', () => {
  render(<Container />);
  const titleElem = screen.getByText(/flickr photo search/i, { selector: '.headerSpan' });
  expect(titleElem).toBeInTheDocument();
});
