import styles from "./hero-section.module.scss";
import { arrowDown, bag, search } from "@/assets";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <header className={styles.header}>
          <a href="#">Panto</a>
          <nav className={styles.menu}>
            <a href="#">
              Furniture
              <img src={arrowDown} alt="" />
            </a>
            <a href="#">Shop</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </nav>
          <div className={styles.bag}>
            <img src={bag} alt="Bag" />
            <span className={styles.counter}>0</span>
          </div>
        </header>
        <div className={styles.content}>
          <h1>
            Make your interior more <br /> minimalistic & modern
          </h1>
          <p>
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search furniture"
            />
            <button className={styles.search}>
              <img src={search} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
