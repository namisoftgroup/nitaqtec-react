import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ServiceCard({ service, gradient }) {
  const { t } = useTranslation();
  
  return (
   <>
    <Link to={`/services/${service?.id}`}
      className="service_card"
      data-aos="flip-left"
      style={{
        backgroundImage: `${gradient}, url(${service?.image})`,
        backgroundPosition: "center",
      }}
    >
      <div className="icon">
        <img src={service?.icon} alt="web" />
      </div>
      <h3>{service?.title}</h3>
      <p>{service?.sub_title}</p>
      <span>
        {t("learnMore")} <i className="fa-regular fa-angle-left"></i>
      </span>
    </Link>
   </>
  );
}
