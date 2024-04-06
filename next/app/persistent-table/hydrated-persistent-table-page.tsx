'use server'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import Api from "shared-module/src/api/api";
import getQueryClient from '../lib/utils/get-query-client';
import PersistentTablePageContent from "./persistent-table-page-content";

export default async function HydratedPersistentTablePage() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey: ['getPersistentReservations'], queryFn: Api.getPersistentReservations })
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <PersistentTablePageContent />
    </HydrationBoundary>
  )
}
