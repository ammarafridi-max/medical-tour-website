import styles from "./Navigation.module.css";
import Container from "../../_components/Container/Container";
import SecondaryButton from "../../_components/Buttons/SecondaryButton";

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <Container className="row align-items-center justify-content-between mx-0">
        <Logo />
        <NavLinks />
      </Container>
    </nav>
  );
}

const Logo = () => {
  return <div className={styles.logoDiv}></div>;
};

const NavLinks = () => {
  return (
    <ul className={styles.navLinks}>
      {links.map((item) =>
        item.cta === true ? (
          <SecondaryButton>{item.name}</SecondaryButton>
        ) : (
          <li className={styles.link}>
            <a href={item.href}>{item.name}</a>
          </li>
        )
      )}
    </ul>
  );
};

const links = [
  {
    name: "Tummy Tuck",
    href: "/tummy-tuck",
  },
  {
    name: "Packages",
    href: "/packages",
  },
  {
    name: "Surgeon",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Free Consultation",
    href: "/consultation",
    cta: true,
  },
];
