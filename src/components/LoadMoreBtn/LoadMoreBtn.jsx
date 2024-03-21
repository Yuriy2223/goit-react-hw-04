import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore, hasMore }) => {
  if (!hasMore) {
    return null;
  }

  return (
    <button onClick={onLoadMore} className={styles.loadMoreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
