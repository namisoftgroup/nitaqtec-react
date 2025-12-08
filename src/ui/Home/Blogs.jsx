import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { useGetBlogs } from "../../hooks/blogs/useGetBlogs";
import SectionHeader from "./SectionHeader";
import BlogCard from "../cards/BlogCard";

export default function Blogs() {
  const { blogs } = useGetBlogs();
  const { t } = useTranslation();

  return (
    <section className="blogs_section" id="blogs">
      <div className="container">
        <div className="row">
          <SectionHeader
            title={t("blogsTitle")}
            subTitle={t("blogsSubTitle")}
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
              {blogs?.map((blog) => (
                <SwiperSlide key={blog.id} data-aos="flip-up">
                  <BlogCard blog={blog} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
