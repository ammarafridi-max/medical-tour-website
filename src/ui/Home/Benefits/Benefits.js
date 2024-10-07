import styles from "./Benefits.module.css";
import { PrimarySection } from "../../../_components/Sections/Sections";
import Container from "../../../_components/Container/Container";
import SectionTitle from "../../../_components/Typography/SectionTitle";
import { LuStethoscope } from "react-icons/lu";
import health from "./heart-health-muscle.png";
import checklist from "./checklist.png";
import stethoscope from "./stethoscope.png";

export default function Benefits() {
  return (
    <PrimarySection>
      <Container>
        <div className={styles.cardsSection}>
          <Card
            icon={stethoscope}
            title="Experienced Surgeons"
            text="Our medical experts are highly skilled and have years of experience, ensuring the highest quality care for every patient."
          />
          <Card
            icon={health}
            title="Accredited Facilities"
            text="We partner with internationally accredited hospitals that meet global standards, ensuring the safety and comfort of our clients."
          />
          <Card
            icon={checklist}
            title="Comprehensive Packages"
            text="Our packages provide transparent pricing, personalized attention, and seamless coordination of both medical and travel needs."
          />
        </div>
      </Container>
    </PrimarySection>
  );
}

const Card = ({ title, icon, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconSpan}>
        <LuStethoscope className={styles.icon} />
      </div>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
};
