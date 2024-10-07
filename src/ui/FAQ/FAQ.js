import Container from "../../_components/Container/Container";
import { PrimarySection } from "../../_components/Sections/Sections";
import SectionTitle from "../../_components/Typography/SectionTitle";
import styles from "./FAQ.module.css";
import { faqs } from "../Home/FAQs/FAQs";
import FAQAccordion from "../../_components/FAQAccordion/FAQAccordion";

export default function FAQ() {
  return (
    <PrimarySection py="75px">
      <Container>
        <SectionTitle mb="50px" fontSize="xlarge">
          <span className="bolder">Frequently Asked Questions</span>
        </SectionTitle>
        {faqs.map((faq) => (
          <FAQAccordion question={faq.question}>{faq.answer}</FAQAccordion>
        ))}
      </Container>
    </PrimarySection>
  );
}
