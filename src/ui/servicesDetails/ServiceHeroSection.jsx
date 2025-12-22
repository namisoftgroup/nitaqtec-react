import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ServiceHeroSection({serviceDetails}) {
  const { t } = useTranslation();
  
  
  return (
    <section className="service_hero_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <div className="service_details_header">
              <div className="text">
                <h1>
                  {/* برمجة تطبيقات الجوال الاحترافية */}
                  <span> {serviceDetails?.title}</span>
                </h1>
                <ul>
                  <li>
                    <i className="fa-light fa-circle-check"></i>
                    تصميم وتطوير تطبيقات مخصصة لأنظمة iOS وAndroid
                  </li>
                  <li>
                    <i className="fa-light fa-circle-check"></i>
                    حلول تقنية مبتكرة لتحسين تجربة المستخدم وتسهيل التفاعل
                  </li>
                  <li>
                    <i className="fa-light fa-circle-check"></i>
                    تكامل مع أنظمة متعددة لضمان أداء عالي وموثوقية
                  </li>
                </ul>
                <Link to="/contact">{t("requestServiceNow")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
