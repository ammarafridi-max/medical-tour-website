import styles from "./SectionTitle.module.css";

export default function SectionTitle({
  children,
  textAlign,
  fontSize,
  color = "black",
  pt,
  pb,
  py,
  pl,
  pr,
  px,
  mt,
  mb,
  my,
}) {
  const titleStyle = {
    textAlign: textAlign,
    marginTop: mt || my,
    marginBottom: mb || my,
    paddingTop: pt || py,
    paddingBottom: pb || py,
    paddingLeft: pl || px,
    paddingRight: pr || px,
    textTransform: "uppercase",
    fontWeight: "300",
    fontSize:
      fontSize === "xlarge"
        ? "40px"
        : fontSize === "large"
        ? "36px"
        : fontSize === "small"
        ? "28px"
        : "32px",
    color: color,
  };

  return <h2 style={titleStyle}>{children}</h2>;
}
