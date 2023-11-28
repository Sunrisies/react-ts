import {FC} from 'react'
import './App.scss'
import { RouterProvider } from "react-router-dom"
import routerConfig from './router'

const App:FC = () => {
  return (
    <RouterProvider router={routerConfig}></RouterProvider>
  )
}

export default App
