import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div>
      <Link to={"/landingpage"}>LandingPage</Link>
      <p>Dashboard</p>
    </div>
  );
}
