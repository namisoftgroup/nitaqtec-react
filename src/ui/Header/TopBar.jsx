import { Link } from "react-router-dom";
import { useGetSettings } from "../../hooks/useGetSettings";

export default function TopBar() {
  const { settings } = useGetSettings();

  return (
    <div className="top_bar">
      <div className="container">
        <div className="location_email">
          <ul>
            <li>
              <a className="d-flex align-items-center gap-2" href={settings?.map_link} target="_blank">
                <i className="fa-light fa-location-dot"></i>
                {settings?.location}

              </a>
            </li>
            <li>
              <a className="d-flex align-items-center gap-2" href={`mailto:${settings?.email}`}>
                <i className="fa-light fa-envelope"></i>
                {settings?.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="social_media">
          <ul>
            <li>
              <Link
                to={settings?.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link
                to={settings?.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                to={settings?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link
                to={settings?.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
