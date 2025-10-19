import styles from "./choosing-section.module.scss";

const ChoosingSection = () => {
  return (
    <section className={styles.choosing}>
      <div className={styles.container}>
        <h2>
          Why <br />
          Choosing Us
        </h2>
        <div className={styles.strongSides}>
          <div className={styles.strongSide}>
            <h3>Luxury facilities</h3>
            <p>
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
            <button className={styles.moreInfo}>More Info</button>
          </div>
          <div className={styles.strongSide}>
            <h3>Affordable Price</h3>
            <p>
              You can get a workspace of the highst quality at an affordable
              price and still enjoy the facilities that are oly here.
            </p>
            <button className={styles.moreInfo}>More Info</button>
          </div>
          <div className={styles.strongSide}>
            <h3>Many Choices</h3>
            <p>
              We provide many unique work space choices so that you can choose
              the workspace to your liking.
            </p>
            <button className={styles.moreInfo}>More Info</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoosingSection;
