import {NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const whiteText = ["/"];
    const isWhiteText = whiteText.includes(location.pathname);
    return(
        <nav className = "fixed top-0 h-16 w-screen">
            <div className = {`mx-auto flex justify-around items-center h-full font-['Inter'] ${isWhiteText ? "text-white" : "text-[#373333]"}`}>
                <NavLink to = "/" className = {({ isActive }) => `
                                                    ${isActive 
                                                    ? "underline" 
                                                    : "hover:underline"}`}>
                            HOME
                </NavLink>

                 <NavLink to = "/shows" className = {({ isActive }) => ` 
                                                    ${isActive 
                                                    ? "underline" 
                                                    : "hover:underline"}`}>
                            SHOWS
                </NavLink>

                 <NavLink to = "/about" className = {({ isActive }) => `
                                                    ${isActive 
                                                    ? "underline" 
                                                    : "hover:underline"}`}>
                            ABOUT
                </NavLink>

                 <NavLink to = "/committees" className = {({ isActive }) => ` 
                                                    ${isActive 
                                                    ? "underline" 
                                                    : "hover:underline"}`}>
                            COMMITTEES
                </NavLink>

                 <NavLink to = "/events" className = {({ isActive }) => ` 
                                                    ${isActive 
                                                    ? "text-underline" 
                                                    : "hover:underline"}`}>
                            EVENTS
                </NavLink>

                 <NavLink to = "/contact" className = {({ isActive }) => ` 
                                                    ${isActive 
                                                    ? "underline" 
                                                    : "hover:underline"}`}>
                            CONTACT
                </NavLink>
                </div>
            
        </nav>
    );
}