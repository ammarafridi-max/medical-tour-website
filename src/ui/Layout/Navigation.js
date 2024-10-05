import styles from "./Navigation.module.css";
import Container from "../../_components/Container/Container";

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
      {links.map((item) => (
        <li className={styles.link}>
          <a href={item.href}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

const links = [
  {
    name: "Services",
    href: "/doctors",
  },
  {
    name: "Package",
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
];
