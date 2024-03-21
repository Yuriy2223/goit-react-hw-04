import { useState, useEffect } from "react";
import axios from "axios";
import {
  SearchBar,
  ImageGallery,
  ImageModal,
  ErrorMessage,
  LoadMoreBtn,
} from "./components";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;
    const searchImages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query,
              per_page: 20,
              page,
            },
            headers: {
              Authorization: `Client-ID qD2GYDXWg5EC5y_EzEv2s4JMoh993bSyc3trPfmyaDM`,
            },
          }
        );
        if (response.data.results.length === 0) {
          setError("No images found for this query. Please try again.");
        } else {
          setImages((prevImages) => [...prevImages, ...response.data.results]);
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        setError("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    searchImages();
  }, [query, page]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="App">
      <SearchBar
        onSubmit={(q) => {
          setQuery(q);
          setImages([]);
          setPage(1);
        }}
      />
      {error ? (
        <ErrorMessage message={error} />
      ) : isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <ImageGallery images={images} onOpen={openModal} />
          <LoadMoreBtn onLoadMore={handleLoadMore} />
        </>
      )}
      {selectedImage && (
        <ImageModal
          src={selectedImage.urls.full}
          alt={selectedImage.alt_description}
          author={selectedImage.user.name}
          description={selectedImage.description}
          comments={selectedImage.user.total_collections}
          likes={selectedImage.likes}
          isOpen={!!selectedImage}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
