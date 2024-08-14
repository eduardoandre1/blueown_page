import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import GlobalStyle from './styles/globalStyle.tsx'
import "./fonts.css"
import "animate.css/animate.compat.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
