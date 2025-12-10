import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";

export default function Layout() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";

  // If we're on landing page do not adjust padding, otherwise pt-16 (how it was originally in App.tsx)
  // Navbar no longer controls page flow
  return (
    <>
      <Navbar />
      <main className={isLanding ? "" : "pt-16"}>
        <Outlet />
      </main>
     
    </>
  );
}
