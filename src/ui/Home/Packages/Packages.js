import Container from "../../../_components/Container/Container";
import { PrimarySection } from "../../../_components/Sections/Sections";
import SectionTitle from "../../../_components/Typography/SectionTitle";
import { FaCheck } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import styles from "./Packages.module.css";
import SecondaryButton from "../../../_components/Buttons/SecondaryButton";

export default function Packages() {
  return (
    <PrimarySection mt="75px">
      <Container className={styles.container}>
        <div className="row mx-0 px-0">
          <div className="col-12 col-lg-7">
            <SectionTitle mb="35px" fontSize="">
              All-Inclusive <br />
              <span className="bolder primary">Abdominoplasty Package</span>
            </SectionTitle>
            <ul className={styles.list}>
              <ListItem>
                5 nights in a private hospital room with 24/7 medical care and
                support. All necessary medications, dressings, and follow-up
                checkups.
              </ListItem>
              <ListItem>
                Private airport pick-up and drop-off in a premium vehicle. All
                ground transportation between the hospital and accommodation
                included.
              </ListItem>
              <ListItem>
                Abdominoplasty (tummy tuck) procedure performed by an
                experienced, board-certified surgeon. Full anesthesia and
                operating room fees included.
              </ListItem>
              <ListItem>
                Personal assistant available for any assistance during surgery
                and recovery.
              </ListItem>
              <ListItem>
                Full assistance with obtaining a Pakistan e-Visa for medical
                travel.
              </ListItem>
            </ul>
            <h4 className={styles.price}>
              ... all for <span className="bold">$2,999</span>
            </h4>
            <SecondaryButton>Get More Details</SecondaryButton>
          </div>
          <div className="col-12 col-lg-5"></div>
        </div>
      </Container>
    </PrimarySection>
  );
}

const ListItem = ({ children }) => {
  return (
    <li className={styles.listItem}>
      <span>
        <FaCircleCheck className={styles.icon} />
      </span>
      <span>{children}</span>
    </li>
  );
};
