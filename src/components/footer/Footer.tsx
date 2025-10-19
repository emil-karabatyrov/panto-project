import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.description}>
            <h3>Panto</h3>
            <p>
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>
          <div className={styles.links}>
            <div className={`${styles.services} ${styles.linksBlock}`}>
              <h4>Services</h4>
              <ul className={styles.list}>
                <li>Email Marketing</li>
                <li>Campaigns</li>
                <li>Branding</li>
              </ul>
            </div>
            <div className={`${styles.furniture} ${styles.linksBlock}`}>
              <h4>Furniture</h4>
              <ul className={styles.list}>
                <li>Beds</li>
                <li>Chair</li>
                <li>All</li>
              </ul>
            </div>
            <div className={`${styles.follow} ${styles.linksBlock}`}>
              <h4>Follow Us</h4>
              <ul className={styles.list}>
                <li className={styles.facebook}>Facebook</li>
                <li className={styles.twitter}>Twitter</li>
                <li className={styles.instagram}>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.promo}>
          <span>Copyright © 2021</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
