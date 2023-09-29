import type { ReactNode } from 'react';
import React from 'react';
import AntdRegistry from '../components/antd-registry/antd-registry';

export default function PageLayout({ children }: { children: ReactNode }) {
  return <AntdRegistry>{children}</AntdRegistry>;
}
