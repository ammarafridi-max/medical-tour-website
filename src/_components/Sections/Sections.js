import styles from "./Sections.module.css";

export function PrimarySection({
  children,
  className,
  pt,
  pb,
  py,
  pl,
  pr,
  px,
  mt,
  mb,
  my,
  ml,
  mr,
  mx,
  backgroundColor,
}) {
  const style = {
    marginTop: mt || my,
    marginBottom: mb || my,
    marginLeft: ml || mx,
    marginRight: mr || mx,
    paddingTop: pt || py,
    paddingBottom: pb || py,
    paddingLeft: pl || px,
    paddingRight: pr || px,
    backgroundColor: backgroundColor || "transparent",
  };
  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
}

export function ImgSection(props) {
  const sectionStyle = {
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    padding: "150px 0 100px 0",
  };

  return (
    <section className={props.className} style={sectionStyle}>
      {props.children}
    </section>
  );
}
