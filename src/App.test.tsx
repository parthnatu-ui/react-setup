import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  test('renders Vite and React logos', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  test('increments count on button click', async() => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is/i });
    await userEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
  });
});
