import { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      setError("Type text before searching");
      setTimeout(() => setError(""), 3000);
    } else {
      setError("");
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
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </header>
  );
};

export default SearchBar;
