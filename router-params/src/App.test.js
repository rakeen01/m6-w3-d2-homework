import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the TV Apps heading', () => {
  render(<App />);
  expect(screen.getByText(/tv apps/i)).toBeInTheDocument();
});
