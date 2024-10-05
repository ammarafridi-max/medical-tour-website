import Container from "../../../_components/Container/Container";
import { PrimarySection } from "../../../_components/Sections/Sections";
import SectionTitle from "../../../_components/Typography/SectionTitle";
import FAQAccordion from "../../../_components/FAQAccordion/FAQAccordion";
import ContactForm from "../../../_components/ContactForm/ContactForm";
import styles from "./FAQs.module.css";

export default function FAQs() {
  return (
    <PrimarySection pb="75px" backgroundColor="white">
      <Container>
        <SectionTitle mb="50px">
          <span className="bolder">Frequently Asked Questions</span>
        </SectionTitle>
        <div className={styles.row}>
          <div className="col-12 col-lg-8 px-0">
            {faqs.map((faq) => (
              <FAQAccordion question={faq.question}>{faq.answer}</FAQAccordion>
            ))}
          </div>
          <ContactForm />
        </div>
      </Container>
    </PrimarySection>
  );
}

const faqs = [
  {
    question: "Is Pakistan a safe country?",
    answer:
      "Pakistan, in general, is a safe country, especially its capital city, Islamabad, where world-class facilities and hospitals are available. All of our surgeries will be performed in Islamabad.",
  },
  {
    question: "Is Pakistan a safe country?",
    answer:
      "Pakistan, in general, is a safe country, especially its capital city, Islamabad, where world-class facilities and hospitals are available. All of our surgeries will be performed in Islamabad.",
  },
  {
    question: "Is Pakistan a safe country?",
    answer:
      "Pakistan, in general, is a safe country, especially its capital city, Islamabad, where world-class facilities and hospitals are available. All of our surgeries will be performed in Islamabad.",
  },
  {
    question: "Is Pakistan a safe country?",
    answer:
      "Pakistan, in general, is a safe country, especially its capital city, Islamabad, where world-class facilities and hospitals are available. All of our surgeries will be performed in Islamabad.",
  },
  {
    question: "Is Pakistan a safe country?",
    answer:
      "Pakistan, in general, is a safe country, especially its capital city, Islamabad, where world-class facilities and hospitals are available. All of our surgeries will be performed in Islamabad.",
  },
  {
    question: "Is Pakistan a safe country?",
    answer:
      "Pakistan, in general, is a safe country, especially its capital city, Islamabad, where world-class facilities and hospitals are available. All of our surgeries will be performed in Islamabad.",
  },
];
