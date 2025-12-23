import { useGetCategories } from "../hooks/projects/useGetCategories";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetProducts } from "../hooks/Products/useGetProducts";
import ProductCard from "../ui/Home/ProductCard";

export default function Products() {
  const { t } = useTranslation();
  const { products } = useGetProducts();
  const { categories } = useGetCategories();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category") || "all";
    setActiveCategory(category);
  }, [searchParams]);

  console.log(products);
  
  // const filteredProjects =
  //   activeCategory === "all"
  //     ? projects
  //     : projects?.filter((project) => project.category === activeCategory);

  return (
    <section className="portfolio_page">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <div className="portfolio_header">
              <div className="text">
                <h1>{t("portfolioTitle")}</h1>
                <p>{t("portfolioSubTitle")}</p>
              </div>
              <div className="img">
                <img src="/images/contact.png" alt="" />
              </div>
            </div>
          </div>
          {/* <div className="col-12 p-2">
            <div className="filter">
              <button
                className={activeCategory === "all" ? "active" : ""}
                onClick={() => setSearchParams({})}
              >
                {t("allWorks")}
              </button>
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  className={activeCategory === category?.title ? "active" : ""}
                  onClick={() => setSearchParams({ category: category?.title })}
                >
                  {category?.title}
                </button>
              ))}
            </div>
          </div> */}
          {products?.map((product) => (
            <div className=" col-lg-4 col-12 p-2" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
