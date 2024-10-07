import InputSecondary from "../FormElements/InputSecondary";
import SecondaryButton from "../Buttons/SecondaryButton";
import Label from "../FormElements/Label";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <form className={`${styles.container}`}>
      <h3>Got More Questions?</h3>
      <p className={styles.instruction}>
        Fill and submit the form below and we'll try to answer it ASAP!
      </p>
      <Label type="secondary">Name</Label>
      <InputSecondary />
      <Label type="secondary" className="mt-3">
        Email
      </Label>
      <InputSecondary />
      <Label type="secondary" className="mt-3">
        Message
      </Label>
      <InputSecondary />
      <div className="text-center">
        <SecondaryButton mt="20px">Send</SecondaryButton>
      </div>
    </form>
  );
}
