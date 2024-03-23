'use server'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import Api from "shared-module/src/api/api";
import getQueryClient from '../lib/utils/get-query-client';
import Users from "./users";

export default async function HydratedUsers() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey: ['getUsers'], queryFn: Api.getUsers })
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <Users />
    </HydrationBoundary>
  )
}
