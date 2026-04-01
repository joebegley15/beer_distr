import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

it('renders website navigation tabs', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  expect(screen.getByText(/services/i)).toBeInTheDocument();
  expect(screen.getByText(/experience/i)).toBeInTheDocument();
  expect(screen.getByText(/join the crew/i)).toBeInTheDocument();
  expect(screen.getByText(/book us/i)).toBeInTheDocument();
});
