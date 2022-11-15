import { render, screen } from '@testing-library/react';
import App from './App';
import BuyPage from './pages/buypage';
import Cart from './pages/cart';
import Home from './pages/home';
import OpenAStore from './pages/openAStore';
import UploadPage from './pages/upload';
import User from './pages/user';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Card Number Text', () => {
  render(<Cart />);
  const linkElement = screen.getByText(/Card Number/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Character Modelling Text', () => {
  render(<BuyPage />);
  const linkElement = screen.getByText(/Character Modelling/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders WEEKLY FREEBIES Text', () => {
  render(<Home />);
  const linkElement = screen.getByText(/WEEKLY FREEBIES/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Track how you are doing Text', () => {
  render(<OpenAStore />);
  const linkElement = screen.getByText(/Track how you are doing/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Preview Image Text', () => {
  render(<UploadPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Change Cover Text', () => {
  render(<User />);
  const linkElement = screen.getByText(/Change Cover/i);
  expect(linkElement).toBeInTheDocument();
});
