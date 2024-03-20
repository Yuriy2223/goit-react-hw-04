import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onOpen }) => (
  <div className={styles.box} onClick={() => onOpen(image)}>
    <img className={styles.img} src={image.urls.small} alt={image.alt_description} />
  </div>
);

export default ImageCard;
