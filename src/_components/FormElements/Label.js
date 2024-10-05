import styles from "./Label.module.css";

export default function Label({
  children,
  htmlFor,
  type = "primary",
  className,
}) {
  return (
    <label
      className={`${styles.Label} ${styles[type]} ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
