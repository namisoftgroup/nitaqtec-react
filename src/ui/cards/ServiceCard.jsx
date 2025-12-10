import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ServiceCard({ service, gradient }) {
  const { t } = useTranslation();
  return (
    <div
      className="service_card"
      data-aos="flip-left"
      style={{
        backgroundImage: `${gradient}, url(${service?.background})`,
      }}
    >
      <div className="icon">
        <img src={service?.icon} alt="web" />
      </div>
      <h3>{service?.title}</h3>
      <p>{service?.sub_title}</p>
      <Link to={`/services/${service?.id}`}>
        {t("learnMore")} <i className="fa-regular fa-angle-left"></i>
      </Link>
    </div>
  );
}
