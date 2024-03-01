import type { ReactNode } from 'react';
import React from 'react';
import DefaultProviders from "../../components/default-providers/default-providers";

export default function PageLayout({ children }: { children: ReactNode }) {
  return <DefaultProviders>{children}</DefaultProviders>;
}
