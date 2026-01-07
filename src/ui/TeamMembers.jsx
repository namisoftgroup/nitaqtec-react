import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
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
        <h2 data-aos="fade-right">{t("ourTeam")}</h2>
        <p data-aos="fade-left">{t("ourTeamSubTitle")}</p>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          grabCursor={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                      {member?.facebook_link && (
                        <a href={member?.facebook_link} target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      )}
                    </li>
                    <li>
                     {member?.instagram_link && (
                       <a href={member?.instagram_link} target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                     )}
                    </li>
                    <li>
                      {member?.twitter_link && (
                        <a href={member?.twitter_link} target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      )}
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
