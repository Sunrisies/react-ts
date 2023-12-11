import { createBrowserRouter } from 'react-router-dom'

import HomeLayout from '../layouts'
import About from '../pages/About'
import Index from '../pages/Index'
import NotFound from '../pages/NotFound'
import Netdisk from '../pages/Netdisk'
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
        path   : 'about',
        element: <About />,
      },
      {
        path: 'netdisk',
        element: <Netdisk />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
