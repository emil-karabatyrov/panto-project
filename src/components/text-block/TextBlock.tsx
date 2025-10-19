import React from "react";
import styles from "./text-block.module.scss";

type TextBlockProps = {
  subtitle: string;
  title: string;
  description: string;
  margin: number;
  more: boolean;
};

const TextBlock: React.FC<Partial<TextBlockProps>> = ({
  subtitle,
  title,
  description,
  margin,
}) => {
  return (
    <div className={styles.textBlock} style={{ marginTop: margin }}>
      <span className={styles.subtitle}>{subtitle}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <button className={styles.more}>More Info</button>
    </div>
  );
};

export default TextBlock;
