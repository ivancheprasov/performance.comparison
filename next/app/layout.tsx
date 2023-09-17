import type { ReactNode } from 'react';
import React from "react";
import AntdRegistry from "./components/AntdRegistry/AntdRegistry";

export const metadata = {
  title: 'NextJS Performance Test',
  description: 'App Example for Google LightHouse measurements',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
      <AntdRegistry>
        {children}
      </AntdRegistry>
      </body>
    </html>
  );
}
