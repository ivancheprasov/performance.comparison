'use client'

import { useQuery } from "@tanstack/react-query";
import Api from "shared-module/src/api/api";
import ReservationTable from "shared-module/src/components/reservation-table";

export default function PersistentTablePageContent() {
  const { data, isFetching } = useQuery({ queryKey: ['getPersistentReservations'], queryFn: Api.getPersistentReservations });

  return (
    <main>
      <ReservationTable data={data} isFetching={isFetching} />
    </main>
  )
}
