import type { ReactNode } from 'react';
import React from "react";

export const metadata = {
  title: 'NextJS Performance Test',
  description: 'App Example for Google LightHouse measurements',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
