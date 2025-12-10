import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGetPackages from "../../hooks/useGetPackages";

function Packages() {
  const { data: packages } = useGetPackages();
  const [packagesType, setPackagesType] = useState("programming");
  const { t } = useTranslation();

  return (
    <section className="packages" id="packages">
      <div className="container">
        <span className="strip2">
          <img src="/Rectangle-5-Copy-3.png" alt="" />
        </span>
        <h3 data-aos="fade-up">{t("packagesTitle")}</h3>
        <div className="btns" data-aos="fade-up">
          <button
            onClick={() => setPackagesType("programming")}
            className={packagesType === "programming" ? "h" : ""}
          >
            {t("programing")}
          </button>
          <button
            onClick={() => setPackagesType("marketing")}
            className={packagesType === "marketing" ? "h" : ""}
          >
            {t("marketing")}
          </button>
        </div>
        <div className="row justify-content-center">
          {packages
            ?.filter((p) => p.type === packagesType)
            ?.map((item) => (
              <div
                className="col-lg-4 col-12 p-2"
                key={item.id}
                data-aos="fade-up"
              >
                <div className="package_card">
                  <h5>{item.name}</h5>
                  <ul>
                    {item?.features?.map((feature) => (
                      <li key={feature.id}>
                        <span>
                          <i className="fa-regular fa-check"></i>
                        </span>
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">{t("getThePackage")}</Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
