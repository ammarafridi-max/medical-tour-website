import { Helmet } from "react-helmet";
import Container from "../../_components/Container/Container";
import { PrimarySection } from "../../_components/Sections/Sections";
import SurgeonCard from "../../_components/SurgeonCard/SurgeonCard";
import SectionTitle from "../../_components/Typography/SectionTitle";
import styles from "./TummyTuck.module.css";

export default function TummyTuck() {
  return (
    <>
      <Helmet>
        <title>Tummy Tuck | Services</title>
      </Helmet>
      <PrimarySection>
        <Container>
          <SectionTitle fontSize="large" mb="30px">
            <span className="bolder">Tummy Tuck (Abdominoplasty)</span>
          </SectionTitle>
          <div className="row px-0">
            <div className="col-12 col-lg-8">
              <p>
                Abdominoplasty, or tummy tuck, is a surgical procedure that
                removes excess fat and skin from the abdomen while tightening
                the abdominal muscles. It is commonly sought by individuals
                after significant weight loss or pregnancy to achieve a flatter,
                more toned midsection. The surgery can vary from a full to a
                mini tummy tuck, depending on the patient’s needs.
              </p>
              <p>
                In addition to enhancing appearance, abdominoplasty can improve
                posture by strengthening the core muscles. While it offers
                long-lasting results, maintaining a healthy lifestyle is
                essential for sustaining those benefits. However, it's important
                to remember that this procedure is not a weight-loss solution.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <SurgeonCard />
            </div>
          </div>
        </Container>
      </PrimarySection>
    </>
  );
}
