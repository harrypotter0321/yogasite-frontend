import { Link } from 'react-router-dom'
import './App.css'
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './pages/Menu'
import Post from './pages/Post';
import Posting from './admin/Posting';
import Viewpost from './admin/Viewpost';
import Editpost from './admin/Editpost';
import { useState } from 'react';
import Home from './user/Home';
import Myachievement from './pages/Myachievement';
import Layout from './admin/Layout';
import StudentAch from './pages/StudentAch';
import Contact from './pages/Contact';
import Classes from './pages/Classes';
import Login from './pages/Login';









function App() {


  const router = createBrowserRouter([


    {
      path: "/",
      element: <Home />,
    },
    // {
    //   path: "layout",
    //   element: <Layout />,
    //   children: [
    //     {
    //       path: "/menu",
    //       element: <Menu />,
    //     },
    //     {
    //       path: "/post",
    //       element: < Post />,
    //       children: [
    //         {
    //           path: "/post",
    //           element: <Posting />
    //         }, {
    //           path: "/post/viewpost",
    //           element: <Viewpost />
    //         }, {
    //           path: "/post/editpost",
    //           element: <Editpost />
    //         }
    //       ]
    //     },
    //   ]
    // },
    {
      path:"layout",
      element:<Layout/>,
      children:[
            {
              path: "/layout",
              element: <Menu />,
            },
            {
              path: "post",
              element: < Post />,
              children: [
                {
                  path: "posting",
                  element: <Posting />
                }, {
                  path: "viewpost",
                  element: <Viewpost />
                }, {
                  path: "editpost",
                  element: <Editpost />
                }
              ]
            },
          ]
    },
    {
      path: '/admin',
      element: <Login />,
    },
    {
      path: "/myachievements",
      element: <Myachievement />
    },
    {
      path: "/studentachievements",
      element: <StudentAch />
    },
    {
      path: "/contactus",
      element: <Contact />
    },
    {
      path: "/classes",
      element: <Classes />
    },


  ]);

  return (

    <>
      
      <RouterProvider router={router} />


    </>

  )

}

export default App
