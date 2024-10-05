import styles from "./TextArea.module.css";

export default function TextArea({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={styles.textarea}
      rows={1}
    />
  );
}
