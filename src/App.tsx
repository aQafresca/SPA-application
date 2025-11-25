import { type JSX } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './route';

function App(): JSX.Element {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
