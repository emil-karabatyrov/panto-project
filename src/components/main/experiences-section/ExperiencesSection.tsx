import styles from "./experiences-section.module.scss";
import { experience } from "@/assets";
import { TextBlock } from "@/components/text-block";

const ExperiencesSection = () => {
  return (
    <section className={styles.experiences}>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <img src={experience} alt="" className={styles.previewImg} />
        </div>
        <TextBlock
          margin={17}
          more
          subtitle="experiences"
          title="we provide you the best experience"
          description="You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials"
        />
      </div>
    </section>
  );
};

export default ExperiencesSection;
