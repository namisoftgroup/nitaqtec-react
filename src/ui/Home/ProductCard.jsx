import { Link } from "react-router-dom";

export default function ProductCard({product }) {
  return (
    <Link
      to={`/project-details/${product?.id}`}
      className="project_card"
      data-aos="flip-up"
    >
      <div className="img">
        <div className="link">
          <span>
            <i className="fa-light fa-arrow-right"></i>
          </span>
        </div>
        <img src={product?.image} alt="circle" />
      </div>
      <div className="content">
        <h6>{product?.title}</h6>
        <p>{product?.description}</p>
        <div className="tags">
          {product?.skills?.map((tag) => {
            return <span key={tag?.id}>{tag?.title}</span>;
          })}
        </div>
      </div>
    </Link>
  );
}
