'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import React from 'react';
import AntdRegistry from '../components/antd-registry/antd-registry';

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <AntdRegistry>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AntdRegistry>
  );
}
