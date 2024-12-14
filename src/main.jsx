import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App.jsx';
import { CustomButton } from './components/App2.jsx';
import { RenderName } from './components/App3.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CustomButton />
    <RenderName name='Maggi' age={3} breed='chihuahua' />
    <RenderName name='Pipo' age={4} />
  </StrictMode>,
)