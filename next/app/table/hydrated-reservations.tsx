'use server'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import Api from "shared-module/src/api/api";
import getQueryClient from '../lib/utils/get-query-client';
import Reservations from "./reservations";

export default async function HydratedReservations() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey: ['getReservations'], queryFn: Api.getReservations })
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <Reservations />
    </HydrationBoundary>
  )
}
