import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorBoundary from './componentes/ErrorBoundary/ErrorBoundary.jsx'


/* Components */
import Footer from './componentes/footer/footer.jsx'
import Header from './componentes/header/header.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <App/>
    <Footer/>
  </React.StrictMode>
)

