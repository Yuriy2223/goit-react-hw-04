import { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      toast.error("Type text before searching", { className: "custom-toast" });
    } else {
      onSubmit(input);
    }
  };

  return (
    <header className={styles.heder}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <FaSearch className={styles.icon} />
        </button>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
      <ToastContainer />
    </header>
  );
};

export default SearchBar;
