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
          <div>
            {faqs.map((faq, i) => {
              while (i < 6) {
                return (
                  <FAQAccordion question={faq.question}>
                    {faq.answer}
                  </FAQAccordion>
                );
              }
            })}
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </PrimarySection>
  );
}

export const faqs = [
  {
    question: "What is included in the abdominoplasty package?",
    answer:
      "Our abdominoplasty package includes the surgery itself, hospital stay, pre-operative consultations, post-operative care, accommodation, local transportation, and a dedicated patient coordinator to assist with travel arrangements.",
  },
  {
    question: "How long will I need to stay in Pakistan after the surgery?",
    answer:
      "For an abdominoplasty, patients typically need to stay in Pakistan for 10-14 days. This allows time for pre-surgery consultations, the procedure, and post-operative care, including follow-up consultations and healing.",
  },
  {
    question: "Are the surgeons qualified and experienced?",
    answer:
      "Yes, we work only with highly qualified and experienced surgeons who are board-certified and have extensive experience in performing abdominoplasty and other cosmetic surgeries.",
  },
  {
    question: "What is the recovery time for abdominoplasty?",
    answer:
      "Initial recovery from abdominoplasty takes around 2-3 weeks. However, full recovery may take a few months. During the first few weeks, you’ll need to avoid strenuous activities and follow the post-operative care instructions provided by your surgeon.",
  },
  {
    question: "Is the surgery safe?",
    answer:
      "Abdominoplasty is a common and safe procedure when performed by experienced surgeons in accredited facilities. Our partner hospitals follow strict international safety standards, and our medical team will monitor your progress before, during, and after the surgery to ensure your safety and well-being.",
  },
  {
    question: "Is it safe to travel to Pakistan for surgery?",
    answer:
      "Yes, it is safe to travel to Pakistan for surgery. Our partner hospital is located in Murree, a serene and secure area in Islamabad, known for its peaceful environment. The location offers a calm atmosphere for recovery, and the city itself has strict security measures in place, ensuring the safety and comfort of our international patients.",
  },
  {
    question: "Will I have support after returning home?",
    answer:
      "Yes, our team provides continuous post-operative support even after you return home. We offer virtual follow-up consultations to ensure your recovery is on track and to address any concerns or questions that may arise.",
  },
  {
    question: "Do I need a visa to travel to Pakistan for surgery?",
    answer:
      "Yes, you will need a visa to travel to Pakistan for medical purposes. However, our team provides full assistance with obtaining a Pakistan e-Visa, making the process smooth and hassle-free.",
  },
  {
    question: "Can I bring a companion with me?",
    answer:
      "Yes, you are welcome to bring a companion to accompany you during your stay. Our packages can also include accommodation and local transportation for your companion to ensure both of you are comfortable throughout your medical journey.",
  },
  {
    question: "How do I prepare for the surgery?",
    answer:
      "Our medical team will provide you with detailed pre-surgery instructions. This may include specific dietary guidelines, adjusting medications, and preparing your body for surgery. We recommend following these instructions closely for optimal results and a smooth recovery.",
  },
];
