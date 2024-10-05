import Container from "../../../_components/Container/Container";
import { PrimarySection } from "../../../_components/Sections/Sections";
import SectionTitle from "../../../_components/Typography/SectionTitle";
import styles from "./Doctor.module.css";

export default function Doctor() {
  return (
    <PrimarySection pt="75px" pb="50px" backgroundColor="white">
      <Container>
        <SectionTitle mb="30px">
          Meet Your Surgeon
          <br />
          <span className="bolder primary">Dr. Iftekhaar</span>
        </SectionTitle>
        <div className="row mx-0 px-0">
          <div className="col-12 col-lg-8 px-0">
            <p>
              Dr. Iftekhaar is a highly skilled and experienced cosmetic surgeon
              specializing in abdominoplasty (tummy tucks) and body contouring
              procedures. With years of dedicated practice in the field of
              cosmetic surgery, Dr. Iftekhaar has built a reputation for
              delivering exceptional results tailored to each patient’s unique
              needs.
            </p>
            {/* <p>
              Dr. Iftekhaar believes in a patient-centered approach, ensuring
              that every individual receives personalized care and attention.
              From the initial consultation to post-operative follow-ups, Dr.
              Iftekhaar is committed to providing support every step of the way,
              ensuring your safety, comfort, and satisfaction.
            </p> */}
            <p>
              Dr. Iftekhaar is board-certified in cosmetic surgery, specializing
              in abdominoplasty and body sculpting and possesses extensive
              experience with hundreds of successful procedures performed. He is
              trained in using latest surgical techniques to ensure optimal
              results with minimal scarring.
            </p>
            <p className="bold">Why Choose Dr. Iftekhaar?</p>
            <ul>
              <li>
                Personalized treatment plans tailored to your aesthetic goals.
              </li>
              <li>
                Expert use of cutting-edge techniques for natural-looking
                results.
              </li>
              <li>Dedicated aftercare to ensure a smooth recovery process.</li>
            </ul>
          </div>
        </div>
      </Container>
    </PrimarySection>
  );
}
