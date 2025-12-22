export default function ServicesBenefits({serviceDetails}) {

  
  

  if (!serviceDetails) return null;

  const { sub_title, description, image, main_features } = serviceDetails;

  return (
    <section className="service_benifits">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-5">
            <p className="m-0">{sub_title}</p>
            <h2>{description}</h2>
          </div>
          <div className="col-lg-4 col-12 p-2">
            <div className="img">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-12 p-2">
            <ul>
              {main_features?.map((feature, index) => (
                <li key={index}>{feature?.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
