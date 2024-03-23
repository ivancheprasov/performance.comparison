import { App } from 'antd';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './router';
import 'styles/global.scss';

const rootNode = document.getElementById('root');

const queryClient = new QueryClient();

if (rootNode) {
  createRoot(rootNode).render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App>
          <Router />
        </App>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
