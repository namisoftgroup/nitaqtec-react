import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGetBanner } from "../../hooks/home/useGetBanner";

export default function HeroSection() {
  const heroImageRef = useRef(null);
  const { t } = useTranslation();
  const { data, error, isLoading } = useGetBanner();

  return (
    <section className="hero_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              {/* <h6 data-aos="flip-up"> {t("nitaqNetwork")}</h6> */}
              <h6 data-aos="flip-up"> {data?.sub_title}</h6>

              <h1 data-aos="flip-right">  {data?.title}</h1>
              <p data-aos="zoom-in">{data?.description}</p>
              <div className="buttons" data-aos="fade-up">
                <Link to="/contact">{t("contact")}</Link>
                <Link to="/portfolio">{t("viewProjects")}</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="header-images-area">
              <div className="main-images-area">
                <div className="img1">
                  <img
                    ref={heroImageRef}
                    src={data?.image}
                    alt=""
                    data-aos="zoom-in"
                  />
                </div>
                <div className="img2">
                  <img src="/images/header-imgbg.png" alt="" />
                </div>
                <div className="icons-area">
                  <img
                    src="/images/sound-icons1.svg"
                    alt=""
                    className="sound-icons1 aniamtion-key-1"
                  />
                  <img
                    src="/images/lite-icons1.svg"
                    alt=""
                    className="lite-icons1 aniamtion-key-1"
                  />
                </div>
                <div className="auhtor-icons">
                  <img
                    src="/images/elements2.png"
                    alt=""
                    className="elements2"
                  />
                  <img
                    src="/images/elements3.png"
                    alt=""
                    className="elements3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
