import Image from "next/image";
import styles from "../../../styles/IdeasPart.module.css";

const IdeasPart = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p className={styles.text1}>Ideas have a place here</p>
        <p className={styles.text2}>
          Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
        </p>
      </div>
      <div className={styles.imgAndInfo}>
        <div className={styles.ideaImg}>
          <img unoptimized='true' src="/ideasImg.png" />
        </div>
        <div className={styles.ideaText}>
          <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
          <p>Road Design Handbook For The International Road...</p>
          <p>The Best Kept Secrets About Creative People</p>
          <p>We Make It Easy To Find The Great Design Talent, Easier...</p>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <span>See All</span>
        <img unoptimized='true' src="/arrow.png" className={styles.seeAll} />
      </div>
    </div>
  );
};
export default IdeasPart;
