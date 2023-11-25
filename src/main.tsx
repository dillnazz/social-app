import { createRoot } from 'react-dom/client'
import App from './components/app/App.tsx'
import './main.scss'

createRoot(document.getElementById('root')!).render(
    <App />
)
