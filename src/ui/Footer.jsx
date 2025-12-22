import { Link } from "react-router-dom";
import { useGetServices } from "../hooks/services/useGetServices";
import { useTranslation } from "react-i18next";
import { useGetSettings } from "../hooks/useGetSettings";

export default function Footer() {
  const { services } = useGetServices();
  const { settings } = useGetSettings();
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 p-2">
            <div className="logo">
              <Link to="/">
                <img
                  src="/images/logo-h.svg"
                  loading="lazy"
                  alt="النطاق الشبكي"
                />
              </Link>
              <p>{t("footerAbout")}</p>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="col_info">
              <h3>{t("services")}</h3>
              <ul>
                {services?.map((service) => (
                  <li key={service.id}>
                    <Link to={`/services/${service.id}`}>{service.category_title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="col_info">
              <h3>{t("contact")}</h3>
              <ul>
                <li>
                  <i className="fa-sharp fa-light fa-location-crosshairs"></i>{" "}
                  {settings?.location}
                </li>
                <li>
                  <i className="fa-light fa-envelope"></i>
                  <a href={`mailto:${settings?.email}`}>{settings?.email}</a>
                </li>
                <li>
                  <i className="fa-sharp fa-light fa-phone"></i>
                  <a className="phone-format" href={`tel:${settings?.phone}`}>{settings?.phone}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="copy_rights">
              <p>
                &copy; {new Date().getFullYear()} {t("allRightsReserved")}{" "}
                {t("fornitaqNetwork")}
              </p>
              <div className="social_media">
                <Link
                  to={settings?.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link
                  to={settings?.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link
                  to={settings?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link
                  to={settings?.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
