'use server'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import Api from "shared-module/src/api/api";
import getQueryClient from '../lib/utils/get-query-client';
import Gallery from "./gallery";

export default async function HydratedGallery() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey: ['getImages'], queryFn: Api.getImages })
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <Gallery />
    </HydrationBoundary>
  )
}
