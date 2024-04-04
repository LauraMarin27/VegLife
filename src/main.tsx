import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'

import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Suspense fallback={'Conectando la App...'}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </Suspense>
);
