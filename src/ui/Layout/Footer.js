import Container from "../../_components/Container/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <h4>About Us</h4>
            <p>
              We specialize in providing high-quality medical tourism services
              in Pakistan, combining exceptional care, world-class surgeons, and
              luxury recovery options. Your health and satisfaction are our top
              priorities.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksDiv}>
            <h4>Quick Links</h4>
            <ul className={styles.list}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/package">Package</a>
              </li>
              <li>
                <a href="/frequently-asked-questions">FAQs</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.servicesDiv}>
            <h4>Our Services</h4>
            <ul className={styles.list}>
              <li>Abdominoplasty (Tummy Tuck)</li>
              <li>Hair Transplant</li>
              <li>Bariatric Surgery</li>
              <li>Breast Augmentation</li>
              <li>Breast Reduction</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h4>Contact Us</h4>
            <p>123 Healthcare Avenue, Murree, Islamabad, Pakistan</p>
            <p>Phone: +92 123 456 7890</p>
            <p>Email: info@medicaltourismpk.com</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Medical Tourism Pakistan. All rights reserved.</p>
          <p>Terms & Conditions | Privacy Policy</p>
        </div>
      </Container>
    </footer>
  );
}
