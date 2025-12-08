import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetRates } from "../hooks/useGetRates";

export default function Testimonials() {
  const { testimonials } = useGetRates();
  return (
    <section className="team_section">
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          spaceBetween={30}
          speed={1000}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            350: { slidesPerView: 1 },
          }}
          className="swiper testimonialsSwiper"
        >
          {testimonials?.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial_card">
                <img
                  src="/images/left-quotes.svg"
                  alt="quotes"
                  loading="lazy"
                />
                <div className="d-flex flex-column gap-2">
                  <div className="rate">
                    <ul>
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="opinion">{testimonial?.comment}</p>
                </div>
                <div className="owner">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="img">
                      <img src={testimonial?.image} alt={testimonial?.name} />
                    </div>
                    <h6>{testimonial.name}</h6>
                  </div>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
