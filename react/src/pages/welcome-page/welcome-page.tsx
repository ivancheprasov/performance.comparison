import { Link } from "react-router-dom";
import { AppRoutes } from "../../types/routes";

export default function WelcomePage() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to={AppRoutes.SignIn}>Sign In</Link>
    </div>
  );
}
