import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Faqs from "./../ui/Home/Faqs";
import Skills from "./../ui/Skills";
import Testimonials from "../ui/Testimonials";
import { useGetAboutUs } from "../hooks/About-us/useGetAboutUs";
import { useGetVisonsMisions } from "../hooks/About-us/useGetVisionsMisions";

export default function About() {
  const { t } = useTranslation();
  const sectionRef = useRef();
  const [startCount, setStartCount] = useState(false);
  const { aboutData } = useGetAboutUs();
  const { visionsMisionsData } = useGetVisonsMisions();
  


  console.log(visionsMisionsData);

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
                <h6 data-aos="fade-up">{aboutData?.sub_title}</h6>
                <h1 data-aos="fade-up">{aboutData?.title}</h1>
                <p data-aos="fade-up">{aboutData?.description}</p>
                <h5 data-aos="fade-up">{aboutData?.sub_title_two}</h5>
                <div data-aos="fade-up">
                  <Link to="/contact">{t("sendNow")}</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 p-2">
              <div className="imgs" data-aos="fade-up">
                <div className="img">
                  <img src={aboutData?.image_one} alt="about" />
                </div>
                <div className="img">
                  <img src={aboutData?.image_two} alt="about" />
                  <div className="projects_count">
                    <h3>
                      +
                      {startCount && (
                        <CountUp duration={3} start={0} end={aboutData?.projects_completed} />
                      )}
                    </h3>
                    <p>{t("project")}</p>
                  </div>
                  <div className="success_rate">
                    <h3>
                      {startCount && (
                        <CountUp duration={3} start={0} end={aboutData?.success_rate} />
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
         
         {visionsMisionsData?.map((item)=>(
           <div key={item.id} className="col-lg-4 col-12 p-2">
            <div className="borderd_box" data-aos="fade-up">
              <div className="img">
                <img src={item?.icon} alt={item?.title} />
              </div>
              <div className="content">
                <h3>{item?.title}</h3>
                <p>{item?.description}</p>
              </div>
            </div>
          </div>
         ))}

      


        </div>
      </section>

      <Testimonials/>
      <Faqs />
      <Skills />
    </>
  );
}
