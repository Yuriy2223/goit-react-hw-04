import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={styles.loadMoreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
