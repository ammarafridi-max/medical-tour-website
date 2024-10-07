import { Helmet } from "react-helmet";
import Benefits from "./Benefits/Benefits";
import Doctor from "./Doctor/Doctor";
import FAQs from "./FAQs/FAQs";
import Hero from "./Hero/Hero";
import Packages from "./Packages/Packages";
import Services from "./Services/Services";
import SuccessStory from "./SuccessStory/SuccessStory";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Abdominoplasty in Pakistan</title>
      </Helmet>
      <Hero />
      <Benefits />
      <Services />
      <Packages />
      <SuccessStory />
      <Doctor />
      <FAQs />
    </>
  );
}
