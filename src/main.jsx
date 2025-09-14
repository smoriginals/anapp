import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { WishlistProvider } from './Contexts/WishlistContext.jsx';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <WishlistProvider>
                <App />
            </WishlistProvider>
        </BrowserRouter>
    </StrictMode>
)

