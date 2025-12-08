import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/project-details/${project?.id}`}
      className="project_card"
      data-aos="flip-up"
    >
      <div className="img">
        <div className="link">
          <span>
            <i className="fa-light fa-arrow-right"></i>
          </span>
        </div>
        <img src={project?.image} alt="circle" />
      </div>
      <div className="content">
        <h6>{project?.title}</h6>
        <p>{project?.description}</p>
        <div className="tags">
          {project?.skills?.map((tag) => {
            return <span key={tag?.id}>{tag?.title}</span>;
          })}
        </div>
      </div>
    </Link>
  );
}
