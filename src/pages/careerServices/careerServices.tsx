import CareerServiceCoaching from "./CareerServiceCoaching";
import CareerServiceInterview from "./CareerServiceInterview";
import CareerServiceOffer from "./CareerServiceOffer";
import CareerServiceResume from "./CareerServiceResume";
import CareerServiceSkill from "./CareerServiceSkill";

const CareerServices = () => {
  return (
    <>
      <CareerServiceSkill />
      <CareerServiceResume />
      <CareerServiceInterview />
      <CareerServiceOffer />
      <CareerServiceCoaching />
    </>
  );
};

export default CareerServices;
