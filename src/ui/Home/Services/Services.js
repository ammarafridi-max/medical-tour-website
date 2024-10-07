import Container from "../../../_components/Container/Container";
import { PrimarySection } from "../../../_components/Sections/Sections";
import SectionTitle from "../../../_components/Typography/SectionTitle";
import PrimaryButton from "../../../_components/Buttons/PrimaryButton";
import SecondaryButton from "../../../_components/Buttons/SecondaryButton";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <PrimarySection>
      <Container>
        <SectionTitle textAlign="center" fontSize="large" pt="75px" pb="50px">
          <span className="bolder primary">Cosmetic Surgeries</span> We Provide
        </SectionTitle>
        <div>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </Container>
    </PrimarySection>
  );
}

const ServiceCard = () => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceImg}></div>
      <div className={styles.serviceText}>
        <h4>Abdominoplasty</h4>
        <p>
          A tummy tuck, medically known as abdominoplasty, is a cosmetic
          surgical procedure that aims to remove excess skin and fat from the
          abdomen and tighten the abdominal muscles. This procedure is often
          sought by individuals who have excess skin due to significant weight
          loss, pregnancy, or aging. The goal is to create a smoother, firmer
          abdominal profile.
        </p>
        {/* <SecondaryButton mt="10px">Read More</SecondaryButton> */}
        <PrimaryButton mt="10px">Read More</PrimaryButton>
      </div>
    </div>
  );
};
