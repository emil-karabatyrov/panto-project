import styles from "./products-section.module.scss";
import { anjay, baltsar, nyantuy, plus, sakarias, star } from "@/assets";
const products = [
  {
    name: "Sakarias Armchair",
    price: "392",
    img: sakarias,
  },
  {
    name: "Baltsar Chair",
    price: "299",
    img: baltsar,
  },
  {
    name: "Anjay Chair",
    price: "519",
    img: anjay,
  },
  {
    name: "Nyantuy Chair",
    price: "921",
    img: nyantuy,
  },
];
const ProductsSection = () => {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2>Best Selling Product</h2>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.active}`}>Chair</button>
          <button className={styles.tab}>Beds</button>
          <button className={styles.tab}>Sofa</button>
          <button className={styles.tab}>Lamp</button>
        </div>
        <div className={styles.cards}>
          <button className={`${styles.sliderBtn} ${styles.sliderBtnL} `} />
          <button className={`${styles.sliderBtn} ${styles.sliderBtnR} `} />
          {products.map((product) => (
            <div className={styles.card}>
              <div className={styles.imgWrapper}>
                <img src={product.img} alt="Product Image" />
              </div>
              <div className={styles.productDescription}>
                <span className={styles.productType}>Chair</span>
                <h3 className={styles.title}>{product.name}</h3>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map(() => (
                    <img src={star} alt="" />
                  ))}
                </div>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.value}>{product.price}</span>
                </div>
                <button className={styles.add}>
                  <img src={plus} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.viewAll}>View All</button>
      </div>
    </section>
  );
};

export default ProductsSection;
