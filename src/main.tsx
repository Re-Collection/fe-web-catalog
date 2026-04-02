
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './styles/index.css';

const baseUrl = import.meta.env.BASE_URL;

// Recover deep links redirected by public/404.html when hosted on GitHub Pages.
const pendingRedirect = new URLSearchParams(window.location.search).get('p');
if (pendingRedirect) {
  const normalizedPath = pendingRedirect.startsWith('/')
    ? pendingRedirect
    : `/${pendingRedirect}`;
  window.history.replaceState({}, '', `${baseUrl}${normalizedPath.replace(/^\//, '')}`);
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>
);
  