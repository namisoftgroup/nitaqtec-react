import { Link } from "react-router-dom";

export default function ProjectCard({products }) {
  return (
    <Link
      to={`/project-details/${products?.id}`}
      className="project_card"
      data-aos="flip-up"
    >
      <div className="img">
        <div className="link">
          <span>
            <i className="fa-light fa-arrow-right"></i>
          </span>
        </div>
        <img src={products?.image} alt="circle" />
      </div>
      <div className="content">
        <h6>{products?.title}</h6>
        <p>{products?.description}</p>
        <div className="tags">
          {products?.skills?.map((tag) => {
            return <span key={tag?.id}>{tag?.title}</span>;
          })}
        </div>
      </div>
    </Link>
  );
}
