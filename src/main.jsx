import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import AllMovies from './Components/AllMovies/AllMovies.jsx';
import ViewSummary from './Components/ViewSummary/ViewSummary.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <AllMovies></AllMovies>,
        loader: () => fetch('https://api.tvmaze.com/search/shows?q=all')
      },
      {
        path: 'view/:id',
        element: <ViewSummary></ViewSummary>,
        loader: async({params}) => fetch(`https://api.tvmaze.com/search/shows?q=all`)
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
