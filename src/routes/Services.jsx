import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetServices } from "../hooks/services/useGetServices";
import { useGetCategories } from "../hooks/projects/useGetCategories";
import { gradiants } from "../utils/data";
import { useSearchParams } from "react-router-dom";
import ServiceCard from "../ui/cards/ServiceCard";

export default function Services() {
  const { t } = useTranslation();
  const { services } = useGetServices();
  const { categories } = useGetCategories();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory("all");
    }
  }, [searchParams]);

  return (
    <>
      <section className="page_header">
        <div className="container">
          <h2 data-aos="fade-up">{t("ourServiceTitle")}</h2>
          <p data-aos="fade-up">{t("ourServiceSubTitle")}</p>
        </div>
      </section>

      <section className="service_page">
        <div className="container">
          <div className="row">
            <div className="col-12 p-2">
              <div className="filter">
                <button
                  className={activeCategory === "all" ? "active" : ""}
                  onClick={() => setSearchParams({})}
                >
                  {t("allServices")}
                </button>
                {categories?.map((category) => (
                  <button
                    key={category?.id}
                    className={
                      activeCategory === category?.name ? "active" : ""
                    }
                    onClick={() =>
                      setSearchParams({ category: category?.name })
                    }
                  >
                    {category?.name}
                  </button>
                ))}
              </div>
            </div>
            {services?.map((service, index) => (
              <div key={service.id} className="col-lg-3 col-md-6 col-12 p-2">
                <ServiceCard service={service} gradient={gradiants[index]} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
