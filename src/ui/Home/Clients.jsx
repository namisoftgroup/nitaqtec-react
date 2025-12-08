import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { useGetClients } from "../../hooks/useGetClients";

export default function Clients() {
  const { t } = useTranslation();
  const { clients } = useGetClients();
  return (
    <section className="clients_section">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2">
            <h2>{t("clientsTitle")}</h2>
            <p>{t("clientsTitleSubTitle")}</p>
          </div>
          <div className="col-12 p-2">
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              loop="true"
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 5,
                },
              }}
            >
              {clients?.map((client) => (
                <SwiperSlide key={client?.id}>
                  <div className="logo" data-aos="flip-left">
                    <img src={client?.image} loading="lazy" alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
