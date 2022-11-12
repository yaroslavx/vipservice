import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import store from './redux/store';
import { Provider } from 'react-redux';

const rootElement = document.querySelector('#root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>)

}
