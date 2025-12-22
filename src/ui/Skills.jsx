import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import { skillsList } from "../utils/data";
import { useSkillsTechniques } from "../hooks/About-us/useSkillsTechniques";

export default function Skills() {
  const { lang } = useSelector((state) => state.language);
  const { skill } = useSkillsTechniques();
 
  
  return (
    <section className="skills_section">
      <Swiper
        slidesPerView={7}
        spaceBetween={16}
        speed={5000}
        className="skills_slider"
        loop={true}
        modules={[Autoplay]}
        dir={lang === "ar" ? "rtl" : "ltr"}
        rtl={lang === "ar"}
        key={lang}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          992: {
            slidesPerView: 7,
          },
          768: {
            slidesPerView: 4,
          },
          350: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 2,
          },
        }}
      >
        {skill?.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="img">
              <img src={skill?.image} alt={`skill ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
