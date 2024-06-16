import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Search from './components/ui/search.tsx'
import Registration from './components/ui/registration.tsx'
import Graphs from './components/ui/graphs.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Registration />
  </React.StrictMode>,
)
