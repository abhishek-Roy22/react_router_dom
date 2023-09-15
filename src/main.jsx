import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import { About, Contact, Github, Home, User } from './components';
import ErrorPage from './error-page';
import { fetchInfo } from './components/Github/Github';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//       {
//         path: 'user/:id',
//         element: <User />,
//       },
//       {
//         path: 'github',
//         element: <Github />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />} path="/" element={<Root />}>
      <Route path="index" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={fetchInfo} path="github" element={<Github />} />
    </Route>
  )
); // This is the Alternative of Creating routes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
