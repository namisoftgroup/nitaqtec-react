import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/slices/language";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetSettings } from "../../hooks/useGetSettings";
// import { useGetCategories } from "../../hooks/projects/useGetCategories";
import i18next from "i18next";
import { Dropdown } from "react-bootstrap";
import { useGetServices } from "../../hooks/services/useGetServices";

export default function NavBar() {
  const { t } = useTranslation();
  const { settings } = useGetSettings();
  // const { categories } = useGetCategories();
  const { services } = useGetServices();

  const { lang } = useSelector((state) => state.language);

  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const handleLang = (newLang) => {
  //   queryClient.invalidateQueries();
  //   queryClient.removeQueries();
  //   dispatch(setLanguage(newLang));
  //   i18next.changeLanguage(newLang);
  //   document.body.classList.toggle("en", newLang === "en");
  // };

  const handleLang = () => {
    const newLang = lang === "ar" ? "en" : "ar";

    dispatch(setLanguage(newLang));
    localStorage.setItem("lang", newLang);
    i18next.changeLanguage(newLang);

    queryClient.invalidateQueries({ queryKey: [] });

    document.body.classList.remove("en", "ar");
    document.body.classList.add(newLang);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="container">
      <Link to="/" className="logo">
        <img src="/images/logo-h.svg" alt="Logo" />
      </Link>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            {t("home")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            {t("about")}
          </NavLink>
        </li>
        <li>
          <Link to="/#packages">{t("packages")}</Link>
        </li>

        <li>
          <Dropdown
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            show={isOpen}
            style={{ position: "relative" }}
          >
            <Dropdown.Toggle
              style={{
                backgroundColor: "#fff",
                outline: "none",
                border: "none",
                fontSize: "18px",
                color: "#000",
                padding: "0",
              }}
              id="dropdown-basic"
            >
              {t("services")}
            </Dropdown.Toggle>
            <Dropdown.Menu align="start">
              <div className="scroll_menu">
                {services?.map((service) => (
                  <Dropdown.Item
                    key={service?.id}
                    as={Link}
                    to={`/services/${service?.id}`}
                  >
                    {service?.title}
                  </Dropdown.Item>
                ))}
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <NavLink to="/portfolio" onClick={closeMenu}>
            {t("portfolio")}
          </NavLink>
        </li>
        <li>
          <Link to="/blogs" onClick={closeMenu}>
            {t("blogs")}
          </Link>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            {t("contact")}
          </NavLink>
        </li>
      </ul>
      <div
        className={`layer ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      <div className="actions">
        <a
          href={settings?.pdf}
          download={settings?.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="company_file"
        >
          {t("companyFile")}
        </a>
        <button onClick={handleLang}>{lang === "en" ? "AR" : "EN"}</button>
        <button className="menu-button" onClick={toggleMenu}>
          <i className="fa-light fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
