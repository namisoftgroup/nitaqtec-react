import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  const { t } = useTranslation();
  return (
   <>
    <Link to={`/blogs/${blog.id}`} className="blog_card" data-aos="flip-up">
      <div className="img">
        <img src={blog.image} alt="أفضل لغات البرمجة في 2024" />
      </div>
      <div className="content">
        <h5 className="text-dark">{blog.title}</h5>
        <p className="text-muted">{blog.description}</p>
        <span className="text-dark">
          {t("readMore")}
          <i className="fa-regular fa-arrow-left-long"></i>
        </span>
      </div>
    </Link>
   </>
  );
}
