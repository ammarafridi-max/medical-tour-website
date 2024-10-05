import Container from "../../../_components/Container/Container";
import { PrimarySection } from "../../../_components/Sections/Sections";
import SectionTitle from "../../../_components/Typography/SectionTitle";
import styles from "./SuccessStory.module.css";

export default function SuccessStory() {
  return (
    <PrimarySection
      className={styles.section}
      backgroundColor="var(--primary-color)"
      py="75px"
      mt="75px"
    >
      <Container>
        <SectionTitle color="white" textAlign="center">
          <span className="bolder">Success Story</span>
          <br />
          This is a title for this section
        </SectionTitle>
      </Container>
    </PrimarySection>
  );
}
