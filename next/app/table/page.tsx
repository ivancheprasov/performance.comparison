import Link from 'next/link';
import { AppRoutes } from '../lib/types/routes';
import HydratedReservations from './hydrated-reservations';

export default function Page() {
  return (
    <>
      <HydratedReservations />
      <Link href={AppRoutes.Welcome}>Return to the main page</Link>
    </>
  );
}
