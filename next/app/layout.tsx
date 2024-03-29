import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { ReactNode } from 'react';
import React from 'react';
import "shared-module/src/styles/global.scss";

export const metadata = {
  title: 'NextJS Performance Test',
  description: 'App Example for Google LightHouse measurements',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
