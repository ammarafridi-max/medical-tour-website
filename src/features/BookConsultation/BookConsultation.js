import ContactForm from "../../_components/ContactForm/ContactForm";
import Container from "../../_components/Container/Container";
import { PrimarySection } from "../../_components/Sections/Sections";
import SectionTitle from "../../_components/Typography/SectionTitle";
import styles from "./BookConsultation.module.css";

export default function BookConsultation() {
  return (
    <PrimarySection backgroundColor="white" py="100px">
      <Container>
        <div className="row mx-0">
          <div className="col-lg-8">
            <SectionTitle fontSize="xlarge">
              Book A <span className="bold">Free Consultation</span>
            </SectionTitle>
          </div>
          <ContactForm />
        </div>
      </Container>
    </PrimarySection>
  );
}
