import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import i18n from "../utils/i18n";
import AOS from "aos";
import RequestServiceModal from "../ui/RequestServiceModal";

export default function RootLayout() {
  const [isSticky, setIsSticky] = useState();
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const lang = useSelector((state) => state.language.lang);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 118) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
    i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionDivs = section.querySelectorAll("[data-aos]");
      sectionDivs.forEach((div, index) => {
        div.setAttribute("data-aos-delay", (index + 1) * 150);
      });
    });

    AOS.init({
      offset: 100,
      delay: 50,
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => AOS.refresh(), 100);
    window.scrollTo(0, 0);

    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 200);
    }
  }, [location]);

  return (
    <>
      <header className={`${isSticky === true ? "sticky" : ""}`}>
        <Header />
      </header>
      <main className={`${isSticky === true ? "main_fixed" : ""}`}>
        <Outlet />
      </main>
      <Footer />
      <div className="d-flex flex-md-column gap-2 contact-btns">
        <a
          href="https://wa.me/+966539333104"
          className="floating_btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/whats.svg" alt="support" />
        </a>

        <a href="tel:+966539333104" className="floating_btn">
          <img src="/images/call.svg" alt="support" />
        </a>
      </div>
      {/* <RequestServiceModal show={showModal} setShow={setShowModal} /> */}
    </>
  );
}
