'use client'

import { useQuery } from "@tanstack/react-query";
import Api from "shared-module/src/api/api";
import ReservationTable from "shared-module/src/components/reservation-table";

export default function TablePageContent() {
  const { data, isFetching } = useQuery({ queryKey: ['getReservations'], queryFn: Api.getReservations });

  return (
    <main>
      <ReservationTable data={data} isFetching={isFetching} />
    </main>
  )
}
