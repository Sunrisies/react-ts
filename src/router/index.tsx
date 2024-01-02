import { createBrowserRouter } from 'react-router-dom'

interface RouteObject {
  path?: string;
  index?: boolean;
  children?: React.ReactNode;
  caseSensitive?: boolean;
  id?: string;
  // loader?: LoaderFunction;
  // action?: ActionFunction;
  element?: React.ReactNode | null;
  Component?: React.ComponentType | null;
  errorElement?: React.ReactNode | null;
  ErrorBoundary?: React.ComponentType | null;
  // handle?: RouteObject["handle"];
  // shouldRevalidate?: ShouldRevalidateFunction;
  // lazy?: LazyRouteFunction<RouteObject>;
}

import HomeLayout from '../layouts/index'
import Index from '../pages/Index'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import About from '../pages/About'
import Netdisk from '../pages/Netdisk'
import Works from '../pages/Works';
import MdPreview from "../pages/MdPreview.tsx";
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Index />
    },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'netdisk',
        element: <Netdisk />
      }, {
        path: 'works',
        element: <Works />
      },
      {
        path:'MdPreview',
        element:<MdPreview></MdPreview>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router

export const RouterPath =  {
  LOGIN: 'login',
  ABOUT: 'about',
  NETDISK: 'netdisk',
  NOTFOUND: '*',
  WORKS: 'works',
  MDPREVIEW:'MdPreview'
}
