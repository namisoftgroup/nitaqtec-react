import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGetServices } from "./../../hooks/services/useGetServices";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";
import axiosInstance from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useGetAboutCompany } from "../../hooks/home/useGetAboutCompany";

export default function AboutUs() {
  const { t } = useTranslation();
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef();
const { data } = useGetAboutCompany();

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
    <section className="about_us_section" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h6 data-aos="zoom-in-up">{t("aboutSectionSubTitle")}</h6>
              <h2 data-aos="zoom-in-up">{t("aboutSectionTitle")}</h2>
              <p data-aos="zoom-in-up">{t("aboutSectionDesc")}</p>

              <div className="about_footer" data-aos="zoom-in-up">
                <div className="r_list">
                  <ul>
                    {data?.map((about) => (
                      <li key={about.id}>
                        <i className="fa-light fa-badge-check"></i>{" "}
                        {about.title}
                      </li>
                    ))}
                  </ul>
                  <Link to="about" className="btn">
                    {t("readMore")}
                    <i className="fa-regular fa-arrow-up-left"></i>
                  </Link>
                </div>
                <div className="statistics">
                  <ul>
                    <li>
                      <h3>
                        {startCount && (
                          <CountUp duration={3} start={0} end={100} />
                        )}
                        %
                      </h3>
                      <p>{t("successRate")}</p>
                    </li>
                    <li>
                      <h3>
                        {startCount && (
                          <CountUp duration={3} start={0} end={544} />
                        )}
                      </h3>
                      <p>{t("completedProjects")}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-2">
            <div className="about_imgs" data-aos="zoom-in-right">
              <div className="img">
                <img src="/images/about1.jpg" alt="about" />
              </div>
              <div className="img toDown">
                <img src="/images/about2.jpg" alt="about" />
              </div>
              <div className="wabel" d>
                <img src="/images/fav.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
