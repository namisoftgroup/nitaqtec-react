import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { useGetTeams } from "../hooks/home/useGetTeams";

const TeamMembers = () => {
  const { t } = useTranslation();
  const { data } = useGetTeams();

console.log(data);


  return (
    <section className="team">
      <div className="container">
        <h3 data-aos="fade-right">{t("ourTeam")}</h3>
        <p data-aos="fade-left">{t("ourTeamSubTitle")}</p>
        <Swiper
          spaceBetween={50}
          grabCursor={true}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            350: { slidesPerView: 1 },
          }}
          className="teamSwiper"
        >
          {data?.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team-member" data-aos="fade-up">
                <div className="img">
                  <img src={member.image} alt={member.name} />
                  <ul className="social-media">
                    <li>
                      <a href={member?.facebook_link} target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href={member?.instagram_link}>
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={member?.twitter_link}>
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <h6>{member.name}</h6>
                <p>{member.job_title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamMembers;
