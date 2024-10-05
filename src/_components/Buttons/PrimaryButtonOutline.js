import styles from "./PrimaryButton.module.css";

export default function PrimaryButton({
  width,
  mt,
  mb,
  my,
  href,
  className,
  type,
  onClick,
  disabled,
  variant = "fill", // new prop, default to 'fill'
  children,
}) {
  const linkStyle = {
    width: "fit-content",
  };

  const btnStyle = {
    width: width === "100%" && "100%",
    marginTop: mt || my,
    marginBottom: mb || my,
    backgroundColor:
      variant === "fill" ? "var(--primary-color)" : "transparent", // primary color for fill, transparent for outline
    border: variant === "outline" ? "2px solid var(--primary-color)" : "none", // border for outline
    color: variant === "outline" ? "var(--primary-color)" : "#fff", // text color for outline variant
  };

  return (
    <a href={href} style={linkStyle}>
      <button
        style={btnStyle}
        className={`${className} ${styles.Btn}`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </a>
  );
}
