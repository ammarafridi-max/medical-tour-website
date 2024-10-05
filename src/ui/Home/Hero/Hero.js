import styles from "./Hero.module.css";
import { PrimarySection } from "../../../_components/Sections/Sections";
import Container from "../../../_components/Container/Container";
import PrimaryButton from "../../../_components/Buttons/PrimaryButton";
import SecondaryButton from "../../../_components/Buttons/SecondaryButton";
import ConsultationFormModal from "../../../_components/ConsultationFormModal/ConsultationFormModal";
import { useState } from "react";

export default function Hero() {
  const [showModal, setShowModal] = useState("hide");

  return (
    <>
      <ConsultationFormModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <PrimarySection>
        <Container className={styles.container}>
          <div className={styles.text}>
            <h1 className={styles.title}>Transform Your Look Today</h1>
            <p className={styles.subtitle}>
              Achieve your aesthetic goals with highly skilled surgeons,
              personalized care, and luxury recovery options in Pakistan,
              tailored just for you.
            </p>
            <SecondaryButton
              mt="10px"
              mr="20px"
              // href="/book-consultation"
              onClick={() => setShowModal("show")}
            >
              Book Consultation
            </SecondaryButton>
          </div>
          <div className={styles.img}>SOme Image here</div>
        </Container>
      </PrimarySection>
    </>
  );
}
