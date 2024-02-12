import type { ReactNode } from 'react';
import React from 'react';
import Providers from "./providers";

export default function PageLayout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}
