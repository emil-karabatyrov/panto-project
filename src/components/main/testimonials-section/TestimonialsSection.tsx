import styles from "./testimonials-section.module.scss";
import { bang, ibuk, mpok, star } from "@/assets";

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <span>Testimonials</span>
        <h2>Our Client Reviews</h2>
        <div className={styles.cards}>
          <button className={`${styles.sliderBtn} ${styles.sliderBtnL} `} />
          <button className={`${styles.sliderBtn} ${styles.sliderBtnR} `} />
          <div className={`${styles.card} ${styles.cardBackground1}`}>
            <div className={styles.cardContent}>
              <img
                className={styles.userImg}
                src={bang}
                alt="Avatar Bang Upin"
              />

              <div className={styles.userInfo}>
                <h3 className={styles.username}>Bang Upin</h3>
                <p className={styles.name}>Pedagang Asongan</p>
              </div>
              <p className={styles.commentText}>
                “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
                terlihat mahal“
              </p>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map(() => (
                  <img src={star} alt="" />
                ))}
              </div>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardBackground2}`}>
            <div className={styles.cardContent}>
              <img
                className={styles.userImg}
                src={ibuk}
                alt="Avatar Bang Upin"
              />

              <div className={styles.userInfo}>
                <h3 className={styles.username}>Ibuk Sukijan</h3>
                <p className={styles.name}>Ibu Rumah Tangga</p>
              </div>
              <p className={styles.commentText}>
                “Makasih Panto, aku sekarang berasa tinggal di apartment karena
                barang-barang yang terlihat mewah“
              </p>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map(() => (
                  <img src={star} alt="" />
                ))}
              </div>
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardBackground3}`}>
            <div className={styles.cardContent}>
              <img
                className={styles.userImg}
                src={mpok}
                alt="Avatar Bang Upin"
              />

              <div className={styles.userInfo}>
                <h3 className={styles.username}>Mpok Ina</h3>
                <p className={styles.name}>Karyawan Swasta</p>
              </div>
              <p className={styles.commentText}>
                “Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“
              </p>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map(() => (
                  <img src={star} alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
