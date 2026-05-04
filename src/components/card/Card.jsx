import styles from "./Card.module.css";
import arrowImg from "./../../img/icons/arrow.svg";

const Card = ({ title, img }) => {
  return (
    <>
      <a href="#" className={styles.card}>
        <img src={img} alt={title} className={styles.card__img} />

        <div className={styles.card__body}>
          <div className={styles.card__text}>
            <div className={styles.card__title}>{title}</div>
            <div className={styles.card__muted}>Explore Now!</div>
          </div>

          <div className={styles.card__icon}>
            <img src={arrowImg} alt="" />
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
