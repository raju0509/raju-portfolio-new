import { useState } from "react";
import { FiCloud, FiMenu, FiX } from "react-icons/fi";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar container-fluid" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-icon"><FiCloud /></span>
          <span>Raju Jilla</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's Connect</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
