// import OurProjects from "../ui/Home/OurProjects";
import { useGetServiceDetails } from "../hooks/services/useGetServicesDetails";
import ServiceHeroSection from "../ui/servicesDetails/ServiceHeroSection";
import ServicesBenefits from "../ui/servicesDetails/ServicesBenefits";
import WhatWeOffer from "../ui/servicesDetails/WhatWeOffer";

export default function ServiceDetails() {
  const { serviceDetails } = useGetServiceDetails();

  return (
    <>
      <ServiceHeroSection serviceDetails={serviceDetails} />
      <ServicesBenefits serviceDetails={serviceDetails} />
      <WhatWeOffer />
      {/* <OurProjects /> */}
    </>
  );
}
