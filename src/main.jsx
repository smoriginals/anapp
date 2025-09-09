import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { HeroBarProvider } from './Contexts/Heroctx.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <HeroBarProvider>
                <App />
            </HeroBarProvider>
        </BrowserRouter>
    </StrictMode>
)
