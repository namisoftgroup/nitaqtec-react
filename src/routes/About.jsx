import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Faqs from "./../ui/Home/Faqs";
import Skills from "./../ui/Skills";
import Testimonials from "../ui/Testimonials";

export default function About() {
  const { t } = useTranslation();
  const sectionRef = useRef();

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      intersectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        intersectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="about_section" ref={sectionRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 p-2">
              <div className="content">
                <h6 data-aos="fade-up">{t("aboutSectionSubTitle")}</h6>
                <h1 data-aos="fade-up">{t("aboutTitle")}</h1>
                <p data-aos="fade-up">{t("aboutDesc")}</p>
                <h5 data-aos="fade-up">{t("tellUs")}</h5>
                <div data-aos="fade-up">
                  <Link to="/contact">{t("sendNow")}</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="imgs" data-aos="fade-up">
                <div className="img">
                  <img src="/images/about3.jpeg" alt="about" />
                </div>
                <div className="img">
                  <img src="/images/about2.jpg" alt="about" />
                  <div className="projects_count">
                    <h3>
                      +
                      {startCount && (
                        <CountUp duration={3} start={0} end={50} />
                      )}
                    </h3>
                    <p>{t("projects")}</p>
                  </div>
                  <div className="success_rate">
                    <h3>
                      {startCount && (
                        <CountUp duration={3} start={0} end={100} />
                      )}
                      %
                    </h3>
                    <p>{t("successRate")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5 mb-5">
        <div className="row ">
          <div className="col-lg-4 col-12 p-2">
            <div className="borderd_box" data-aos="fade-up">
              <div className="img">
                <img src="/images/icon-our-mission.svg" alt="مهمتنا" />
              </div>
              <div className="content">
                <h3>{t("ourMission")}</h3>
                <p>{t("ourMissionDesc")}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <div className="borderd_box" data-aos="fade-up">
              <div className="img">
                <img src="/images/icon-our-vision.svg" alt="رؤيتنا" />
              </div>
              <div className="content">
                <h3>{t("ourVision")}</h3>
                <p>{t("ourVisionDesc")}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12 p-2">
            <div className="borderd_box" data-aos="fade-up">
              <div className="img">
                <img src="/images/icon-our-value.svg" alt="قيمنا" />
              </div>
              <div className="content">
                <h3>{t("ourValues")}</h3>
                <p>{t("ourValuesDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials/>
      <Faqs />
      <Skills />
    </>
  );
}
