import { Swiper, SwiperSlide } from "swiper/react";
import { useGetProjects } from "./../../hooks/projects/useGetProjects";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function OurProjects() {
  const { t } = useTranslation();
  const { projects } = useGetProjects();

console.log(projects);

  
  return (
    <section className="best_projects">
      <div className="container">
        <div className="row">
          <SectionHeader
            title={t("ourProjectTitle")}
            subTitle={t("ourProjectSubTitle")}
          />
          <div className="col-12 p-2">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              loop="true"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {projects?.map((project) => (
                <SwiperSlide key={project?.id}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-12 p-2" data-aos="fade-up">
            <Link to="/portfolio" className="view_more">
              {t("viewMore")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
