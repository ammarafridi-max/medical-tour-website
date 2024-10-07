import styles from "./Contact.module.css";
import Container from "../../_components/Container/Container";
import { PrimarySection } from "../../_components/Sections/Sections";
import SectionTitle from "../../_components/Typography/SectionTitle";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import InputGroup from "../../_components/FormElements/InputGroup";

export default function Contact() {
  return (
    <PrimarySection py="75px">
      <Container>
        {/* <SectionTitle fontSize="xlarge" mb="35px">
          <span>Contact Us</span>
        </SectionTitle> */}
        <div className={styles.row}>
          <div>
            <ContactForm />
          </div>
          <div>
            <ContactButton
              icon={<MdEmail />}
              title="Email Us"
              href="mailto:info@citytours.ae"
              text="info@citytours.ae"
            />
            <ContactButton
              icon={<RiWhatsappFill />}
              title="WhatsApp Us"
              href="https://api.whatsapp.com/send?phone=971506045355"
              text="+971 50 604 5355"
            />
            <ContactButton
              icon={<MdEmail />}
              title="Email Us"
              href="mailto:info@citytours.ae"
              text="info@citytours.ae"
            />
          </div>
        </div>
      </Container>
    </PrimarySection>
  );
}

const ContactButton = ({ icon, title, href, text }) => {
  return (
    <a className={styles.button} href={href}>
      <div className={styles.iconDiv}>{icon}</div>
      <div className={styles.textDiv}>
        <p className={styles.title}>{title}</p>
        <p>{text}</p>
      </div>
    </a>
  );
};

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <SectionTitle fontSize="large" mb="30px">
        <span className="semi-bold">Contact Us</span>
      </SectionTitle>
      <div className="row px-0">
        <div className="col-12 col-lg-6">
          <InputGroup label="Name" />
        </div>
        <div className="col-12 col-lg-6">
          <InputGroup label="Email" />
        </div>
      </div>
    </form>
  );
};
