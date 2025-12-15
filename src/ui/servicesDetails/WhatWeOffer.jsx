import { useGetFeatures } from "../../hooks/services/useGetFeatures";

export default function WhatWeOffer({serviceDetails}) {

 const { features} = useGetFeatures();

  return (
    <section className="what_we_offer">
      <div className="container">
        <div className="row">
          <div className="col-12 p-2 mb-5 text-center">
            <p className="m-0">
              {serviceDetails?.title}

            </p>
            <h2>
             {serviceDetails?.second_description}
            </h2>
          </div>

          {features?.map((feature) => (
              <div key={feature?.id} className="col-lg-4 col-12 p-2">
            <div className="box">
              <div className="img">
                <img src={feature?.icon} style={{width: '52px'}} alt={feature?.title}/>
              </div>
              <div className="content">
                <h3>{feature?.title}</h3>
                <p>
                 {feature?.description}
                </p>
              </div>
            </div>
          </div>
          ))}

        </div>
      </div>
    </section>
  );
}
