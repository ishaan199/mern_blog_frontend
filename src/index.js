import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import NavBar from './component/Navbar';
import Footer from './component/Footer';
import Login from './component/Login';
import Body from './component/Body';
import Profile from './component/Profile';
import About from './component/About';
import WriteBlogs from './component/WriteBlogs';
import Error from './component/Error';
import Edit from './component/Edit';

const Applayout = () => {
  return (
      <div>
        <NavBar/>
        <Outlet />
        <Footer/>
      </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path:"/login",
        element:<Login/>
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/write",
        element: <WriteBlogs />,
      },
      {
        path:'/edit/:id',
        element:<Edit/>
      },
    ],
    errorElement:<Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={appRouter}/>
);
