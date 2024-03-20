
import ImageCard from "../ImageCard/ImageCard";
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onOpen }) => (
  <ul className={styles.list}>
    {images.map((image) => (
      <li key={image.id} className={styles.item}>
        <ImageCard image={image} onOpen={onOpen} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
