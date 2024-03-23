'use server'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Api from "shared-module/src/api/api";
import getQueryClient from '../lib/utils/get-query-client';
import ListPageContent from "./list-page-content";

export default async function HydratedListPage() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey: ['getUsers'], queryFn: Api.getUsers })
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <ListPageContent />
    </HydrationBoundary>
  )
}
