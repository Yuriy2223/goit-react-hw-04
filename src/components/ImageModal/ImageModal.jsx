import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import styles from "./ImageModal.module.css";

const ImageModal = ({
  src,
  alt,
  author,
  comments,
  likes,
  description,
  isOpen,
  onClose,
}) => (
  <Modal className={styles.modal} isOpen={isOpen} onRequestClose={onClose}>
    <img className={styles.img} src={src} alt={alt} onClick={onClose} />
    <div className={styles.info}>
      <div className={styles.author}>Аuthor: {author}</div>
      <div className={styles.description}>Description: {description}</div>
      <div className={styles.comment}>Comment: {comments}</div>
      <div className={styles.likes}>
        Likes: <span className={styles.likesCount}>{likes}</span>
      </div>
    </div>
    <button className={styles.closeBtn} onClick={onClose}>
      <MdOutlineClose className={styles.svg} />
    </button>
  </Modal>
);

export default ImageModal;

