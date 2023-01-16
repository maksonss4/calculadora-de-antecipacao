import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Landingpage } from "../pages/Landingpage";

export function ContainerRoutes() {
  return (
    <Routes>
      <Route path="landingpage" element={<Landingpage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate replace to={"landingpage"} />} />
    </Routes>
  );
}
