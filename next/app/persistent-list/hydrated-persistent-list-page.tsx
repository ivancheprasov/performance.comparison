'use server'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Api from "shared-module/src/api/api";
import getQueryClient from '../lib/utils/get-query-client';
import PersistentListPageContent from "./persistent-list-page-content";

export default async function HydratedPersistentListPage() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey: ['getPersistentUsers'], queryFn: Api.getPersistentUsers })
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <PersistentListPageContent />
    </HydrationBoundary>
  )
}
