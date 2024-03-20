import styles from "./ErrorMessage.module.css"

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.boxError}>
      <p className={styles.text}>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;
