import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onOpen }) => (
  <div className={styles.box}>
    <img
      className={styles.img}
      src={image.urls.small}
      alt={image.alt_description}
      onClick={() => onOpen(image)}
    />
  </div>
);

export default ImageCard;
