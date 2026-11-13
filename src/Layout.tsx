import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

export default function Layout() {
  // Navbar is sticky and sits in the page flow, so pages need no top padding
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
