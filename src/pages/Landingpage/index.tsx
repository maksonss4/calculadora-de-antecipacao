import { Link } from "react-router-dom";

export function Landingpage() {
  return (
    <div>
      <Link to={"/dashboard"}>dashboard</Link>
      <p>LandingPage</p>
    </div>
  );
}
