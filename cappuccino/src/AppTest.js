import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders without errors', () => {
    render(<App />);
  });



  it('renders the Navbar component', () => {
    render(<App />);
    const navbarElement = screen.getByText('Navbar'); // Replace 'Navbar' with the actual content in your Home component
    expect(navbarElement).toBeInTheDocument();
  });
});