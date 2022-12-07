import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Userprofile from '../pages/Userprofile';
import Mydetails from '../components/user_profile/Mydetails';
import Userorders from '../components/user_profile/Userorders';
import Myminiorders from '../components/user_profile/Myminiorders';
import Home from '../pages/Home';
import Allfoods from '../pages/Allfoods';
import AboutUs from '../pages/AboutUs';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import NewsPage from '../pages/NewsPage';
import NotFound from '../pages/NotFound';
import Forms from '../pages/Forms';
import  ViewDetails  from '../pages/ViewDetails';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Restaurants from '../pages/Restaurants';
const AuthenticationRoutes = (isLoggedIn) => [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/allmeals',
    element: <Allfoods />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/form',
    element: <Forms />,
  },
  {
    path: '/login',
    element: isLoggedIn ? <Navigate to="/profile" /> : <Login />,
  },
  {
    path: '/signout',
    element: <Navigate to="/" />,
  },
  {
    path: '/news',
    element: <NewsPage/>,
  },
  {
    path: '/about',
    element: <AboutUs/>,
  },
  {
    path:'/products',
    element:<Products />
  },
  {
    path:'/restorants',
    element:<Restaurants />
  },
  {
    path:'/news/:id',
    element:<ViewDetails/>
  },
  {
    path:'/products/:productId',
    element:<ProductDetail />
  },
  {
    path:'/news/:id',
    element:<ViewDetails/>
  }
  ,
  {
    path: '/profile/*',
    element: isLoggedIn ? <Userprofile /> : <Navigate to="/login" />,
    children: [
      {
        path: 'details',
        element: <Mydetails />,
      },
      {
        path: 'orders',
        element: <Userorders />,
      },
      {
        path: 'o',
        element: <Myminiorders />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default AuthenticationRoutes;
