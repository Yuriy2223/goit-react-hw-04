import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import styles from "./ImageModal.module.css";

const ImageModal = ({ image, isOpen, onClose }) => (
  <Modal className={styles.modal} isOpen={isOpen} onRequestClose={onClose}>
    <img
      className={styles.img}
      src={image.urls.regular}
      alt={image.alt_description}
      onClick={onClose}
    />
    <div className={styles.info}>
      <h2 className={styles.author}>{`Аuthor: ${image.user.name}`}</h2>
      <p className={styles.comment}>{`Comment: ${image.description}`}</p>
      <p className={styles.likes}>{`Likes: ${image.likes}`}</p>
    </div>
    <button className={styles.closeBtn} onClick={onClose}>
      <MdOutlineClose className={styles.svg} />
    </button>
  </Modal>
);

export default ImageModal;
