import styles from "./Contact.module.css";
import Container from "../../_components/Container/Container";
import { PrimarySection } from "../../_components/Sections/Sections";
import SectionTitle from "../../_components/Typography/SectionTitle";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <PrimarySection>
      <Container>
        <SectionTitle fontSize="xlarge" mb="35px">
          <span>Contact Us</span>
        </SectionTitle>
        <div className="row mx-0 px-0">
          <div className="col-12 col-lg-4 px-0">
            <ContactButton
              icon={<MdEmail />}
              title="Email Us"
              href="mailto:info@citytours.ae"
            >
              info@citytours.ae
            </ContactButton>
          </div>
          <div className="col-12 col-lg-6"></div>
        </div>
      </Container>
    </PrimarySection>
  );
}

const ContactButton = ({ icon, title, href, children }) => {
  return (
    <div className={styles.button}>
      <div className={styles.iconDiv}>{icon}</div>
      <div className={styles.textDiv}>
        <p className={styles.title}>{title}</p>
        <p>{children}</p>
      </div>
    </div>
  );
};
