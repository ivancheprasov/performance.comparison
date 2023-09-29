import Link from 'next/link';
import { AppRoutes } from "./lib/types/routes";

export default function Page() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link href={AppRoutes.SignIn}>Sign In</Link>
    </div>
  );
}
