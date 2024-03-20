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
  const [prevQuery, setPrevQuery] = useState("");
  const [shouldSearch, setShouldSearch] = useState(false);

  useEffect(() => {
    if (query !== prevQuery) {
      setImages([]);
      setPage(1);
      setPrevQuery(query);
      setShouldSearch(true);
    }
  }, [query, prevQuery]);

  useEffect(() => {
    if (shouldSearch) {
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
            setImages((prevImages) => [
              ...prevImages,
              ...response.data.results,
            ]);
          }
        } catch (error) {
          console.error("Error during fetch:", error);
          setError("Something went wrong. Please try again later.");
        } finally {
          setIsLoading(false);
          setShouldSearch(false);
        }
      };

      searchImages();
    }
  }, [shouldSearch, query, page]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    setShouldSearch(true);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={setQuery} />
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
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;

/**==================================================== */

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";

// import {
//   SearchBar,
//   ImageGallery,
//   ImageModal,
//   ErrorMessage,
//   LoadMoreBtn,
// } from "./components";

// const App = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState("");
//   const [prevQuery, setPrevQuery] = useState("");
//   const [shouldSearch, setShouldSearch] = useState(false);

//   useEffect(() => {
//     if (query !== prevQuery) {
//       setImages([]);
//       setPage(1);
//       setPrevQuery(query);
//       setShouldSearch(true);
//     }
//   }, [query, prevQuery]);

//   useEffect(() => {
//     if (shouldSearch) {
//       const searchImages = async () => {
//         setIsLoading(true);
//         setError(null);
//         try {
//           const response = await axios.get(
//             "https://api.unsplash.com/search/photos",
//             {
//               params: {
//                 query,
//                 per_page: 20,
//                 page,
//               },
//               headers: {
//                 Authorization: `Client-ID qD2GYDXWg5EC5y_EzEv2s4JMoh993bSyc3trPfmyaDM`,
//               },
//             }
//           );
//           if (response.data.results.length === 0) {
//             setError("No images found for this query. Please try again.");
//           } else {
//             setImages((prevImages) => [
//               ...prevImages,
//               ...response.data.results,
//             ]);
//           }
//         } catch (error) {
//           console.error("Error during fetch:", error);
//           setError("Something went wrong. Please try again later.");
//         } finally {
//           setIsLoading(false);
//           setShouldSearch(false);
//         }
//       };

//       searchImages();
//     }
//   }, [shouldSearch, query, page]);

//   const openModal = (image) => {
//     setSelectedImage(image);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   const handleLoadMore = () => {
//     const scrollPosition = window.pageYOffset;
//     setPage((prevPage) => prevPage + 1);
//     setShouldSearch(true);
//     navigate(location.pathname, {
//       state: { ...location.state, scrollPosition },
//     });
//   };

//   useEffect(() => {
//     if (location.state?.scrollPosition) {
//       window.scrollTo(0, location.state.scrollPosition);
//     }
//   }, [location]);

//   return (
//     <div className="App">
//       <SearchBar onSubmit={setQuery} />
//       {error ? (
//         <ErrorMessage message={error} />
//       ) : isLoading ? (
//         <p className="loading">Loading...</p>
//       ) : (
//         <>
//           <ImageGallery images={images} onOpen={openModal} />
//           <LoadMoreBtn onLoadMore={handleLoadMore} />
//         </>
//       )}
//       {selectedImage && (
//         <ImageModal
//           image={selectedImage}
//           isOpen={!!selectedImage}
//           onClose={closeModal}
//         />
//       )}
//     </div>
//   );
// };

// export default App;

/**========================== */
