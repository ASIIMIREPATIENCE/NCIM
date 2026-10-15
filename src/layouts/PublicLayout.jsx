
import { NavLink, Outlet } from "react-router-dom";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About NCIM", path: "/about" },
  { label: "Programmes", path: "/programmes" },
  { label: "Events", path: "/events" },
  { label: "Stories & Impact", path: "/stories" },
  { label: "Get Involved", path: "/get-involved" },
  { label: "Contact", path: "/contact" },
];

export default function PublicLayout() {
  return (
    <>
      <header className="site-header">
        <NavLink to="/" className="brand">
          <span className="brand-mark">N</span>
          <span>
            <strong>NCIM</strong>
            <small>Building Hope. Changing Futures.</small>
          </span>
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink to="/donate" className="donate-button">
            Donate
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <strong>NCIM</strong>
          <p>Building Hope. Changing Futures.</p>
        </div>
        <p>
          Supporting children, empowering women and strengthening communities.
        </p>
        <p>© {new Date().getFullYear()} NCIM. All rights reserved.</p>
      </footer>
    </>
  );
}
