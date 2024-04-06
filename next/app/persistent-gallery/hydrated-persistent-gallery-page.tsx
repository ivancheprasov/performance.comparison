'use server'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Api from "shared-module/src/api/api";
import getQueryClient from '../lib/utils/get-query-client';
import PersistentGalleryPageContent from "./persistent-gallery-page-content";

export default async function HydratedPersistentGalleryPage() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey: ['getPersistentImages'], queryFn: Api.getPersistentImages })
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <PersistentGalleryPageContent />
    </HydrationBoundary>
  )
}
