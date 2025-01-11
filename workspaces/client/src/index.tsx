import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ClientApp } from '@wsh-2024/app/src/index';

import { registerServiceWorker } from './utils/registerServiceWorker';

const main = async () => {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.hydrateRoot(
      document.getElementById('root')!,
      <BrowserRouter>
        <ClientApp />
      </BrowserRouter>,
    );
  });

  await registerServiceWorker();
};

main().catch(console.error);
