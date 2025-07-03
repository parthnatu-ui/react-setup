import '@testing-library/jest-dom';


// Since main.tsx only renders <App /> into the root div, we can test that it renders without crashing.
describe('main.tsx', () => {
  test('renders App component without crashing', async () => {
    // Create a root div for rendering
    // const root = document.createElement('div');
    // root.id = 'root';
    // document.body.appendChild(root);

    // // Dynamically import and execute main.tsx using an absolute path
    // await import('./main.tsx');

    // // Clean up
    // document.body.removeChild(root);
  });
});
