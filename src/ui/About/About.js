import styles from "./About.module.css";
import { Helmet } from "react-helmet";
import Container from "../../_components/Container/Container";
import { PrimarySection } from "../../_components/Sections/Sections";
import SectionTitle from "../../_components/Typography/SectionTitle";
import { FaStethoscope } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <PrimarySection py="75px">
        <Container>
          <div className="row mx-0">
            <div className="col-12 col-lg-6 px-0">
              <SectionTitle mb="25px">
                <span className="bolder">About Us</span>
              </SectionTitle>
              <p>
                At [Your Company Name], we believe in making world-class medical
                care accessible and affordable for everyone. As a premier
                medical tourism provider in Pakistan, we offer personalized
                healthcare packages that combine expert medical treatments with
                luxurious recovery options. Whether you are looking for a
                cosmetic procedure, bariatric surgery, or hair restoration, we
                make your journey to health and wellness seamless.
              </p>
              <IconSection />
            </div>
          </div>
        </Container>
      </PrimarySection>
    </>
  );
}

const IconSection = () => {
  return (
    <div>
      <IconCard />
    </div>
  );
};

const IconCard = () => {
  return (
    <div className={styles.iconCard}>
      <div className={styles.iconDiv}>
        <FaStethoscope />
      </div>
      <div className={styles.iconText}>
        <p>
          Highly Skilled Surgeons Our team of board-certified surgeons has
          extensive experience in various medical fields, ensuring the best
          outcomes for every patient.
        </p>
      </div>
    </div>
  );
};
