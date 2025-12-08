import { useTranslation } from "react-i18next";
import { useGetBlogs } from "../hooks/blogs/useGetBlogs";
import BlogCard from "../ui/cards/BlogCard";

export default function Blogs() {
  const { t } = useTranslation();
  const { blogs } = useGetBlogs();
  return (
    <>
      <section className="page_header">
        <div className="container">
          <h2 data-aos="fade-up">{t("blogsTitle")}</h2>
          <p data-aos="fade-up">{t("blogsSubTitle")}</p>
        </div>
      </section>
      <section className="blogs_page">
        <div className="container">
          <div className="row">
            {blogs?.map((blog) => (
              <div
                className="col-lg-4 col-md-6 col-12.p-2"
                key={blog.id}
                data-aos="flip-up"
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
