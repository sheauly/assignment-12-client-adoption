import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from "react-router";
import { router } from './router/router.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import { ThemeProvider } from './components/TheameProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider >
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>

  </StrictMode>,
)
