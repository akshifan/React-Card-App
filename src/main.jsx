import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { CardProvider } from './context/CardContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthProvider>
    <CardProvider>
       <App /> 
    </CardProvider>
    </AuthProvider>
    </BrowserRouter>
)
