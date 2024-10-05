import styles from "./Benefits.module.css";
import { PrimarySection } from "../../../_components/Sections/Sections";
import Container from "../../../_components/Container/Container";
import SectionTitle from "../../../_components/Typography/SectionTitle";
import health from "./heart-health-muscle.png";

export default function Benefits() {
  return (
    <PrimarySection>
      <Container>
        <div className={styles.cardsSection}>
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </PrimarySection>
  );
}

const Card = () => {
  return (
    <div className={styles.card}>
      <img src={health} className={styles.cardImg} />
      <p className={styles.cardTitle}>This is a card</p>
      <p className={styles.cardText}>
        This is some text. It describes one of the reasons why we believe we're
        the best choice for you and why you should choose us over others
      </p>
    </div>
  );
};
