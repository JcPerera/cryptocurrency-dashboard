import { render , screen } from '@testing-library/react';
import Trending from "./pages/Trending";


test('renders the trending page', () => {
  render(<Trending />);
  const linkElement = screen.getByText(/trending/i);
  expect(linkElement).toBeInTheDocument();
});
