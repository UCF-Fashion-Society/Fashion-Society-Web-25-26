import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Zine", to: "/zine" },
  { label: "Current Show", to: "/current-show" },
  { label: "Past Shows", to: "/shows" },
  { label: "Committees", to: "/committees" },
  { label: "Calendar", to: "/events" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-['Inter'] text-sm lg:text-base text-white ${
      isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-black">
      <div className="flex h-14 items-center justify-between px-5 md:px-10">
        <NavLink
          to="/"
          aria-label="Fashion Society home"
          className="text-white text-4xl leading-none font-['Monsieur_La_Doulaise']"
          onClick={() => setOpen(false)}
        >
          FS
        </NavLink>

        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-black pb-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
