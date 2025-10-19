import styles from "./materials-section.module.scss";
import { TextBlock } from "@/components/text-block";
import { materialsLarge, materialsMid, materialsSmall } from "@/assets";

const MaterialsSection = () => {
  return (
    <section className={styles.materials}>
      <div className={styles.container}>
        <TextBlock
          more
          subtitle="Materials"
          margin={124}
          title="Very serious materials for making furniture"
          description="Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price"
        />
        <div className={styles.materialsImgs}>
          <img className={styles.small} src={materialsSmall} alt="" />
          <img className={styles.mid} src={materialsMid} alt="" />
          <img className={styles.large} src={materialsLarge} alt="" />
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
