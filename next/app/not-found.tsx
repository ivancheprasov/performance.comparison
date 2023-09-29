import Link from 'next/link'
import { AppRoutes } from "./lib/types/routes";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={AppRoutes.SignIn}>Return Home</Link>
    </div>
  )
}
