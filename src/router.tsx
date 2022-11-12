import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import AviaPage from './pages/AviaPage'
import InfoPage from './pages/InfoPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'avia',
        element: <AviaPage />
      },
      { path: 'avia/info', element: <InfoPage /> },
    ]
  },
])
