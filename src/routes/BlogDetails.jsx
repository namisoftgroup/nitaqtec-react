import { useGetBlogsDetails } from "../hooks/blogs/useGetBlogsDetails";
import { dateFormat } from "../utils/helper";
import BlogsSideBar from "../ui/BlogsDetails/BlogsSideBar";
import DataLoader from "../ui/DataLoader";

export default function BlogDetails() {
  const { blogsDetails, isLoading } = useGetBlogsDetails();

  return (
    <>
      {isLoading ? (
        <DataLoader />
      ) : (
        <section className="blog_details">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-12 p-2">
                <div className="blog_header">
                  <h1> {blogsDetails.title}</h1>
                  <div className="blog_header_actions">
                    <span className="date">
                      <i className="fa-light fa-calendar-days"></i>{" "}
                      {dateFormat(blogsDetails.created_at)}
                    </span>
                    <button className="share" onClick="share()">
                      <i className="fa-light fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
                <div className="blog_content">
                  <div className="img">
                    <img
                      src={blogsDetails.image}
                      alt="أفضل لغات البرمجة في 2024"
                    />
                  </div>

                  <div className="content-text">
                    {blogsDetails?.description}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-12 p-2">
                <BlogsSideBar />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
