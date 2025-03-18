import { useEffect, useState, CSSProperties  } from 'react'
import toast, { Toaster } from 'react-hot-toast';



import css from './App.module.css'
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader'
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

import { fetchImagesWithSearch } from "../../articles-api";


export default function App() {
  const [galleryImage, setGalleryImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);


  const [selectedImage, setSelectedImage] = useState(null);


const openModal = (image)=> {
  setSelectedImage(image);
  
  }

 const closeModal = ()=>  {
   setSelectedImage(null);
  
  }


  const handleSearch = (image) => {
    setSearchTerm(`${image}/${Date.now()}`)
    setPage(1);
    setGalleryImage([]);

  };
  
  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (searchTerm === '') {
      return;
    }

  const getData = async() => {
    try {
      setError(false);
      setIsLoading(true);

      const data = await fetchImagesWithSearch(searchTerm.split('/')[0], page);
     
     
      setGalleryImage((prevImages) =>[...prevImages, ...data]);
      }
       catch (error) {
      setError(true);
      toast.error('An error occurred while fetching images')

    } finally {
      setIsLoading(false);
    }
  }
  getData();
}, [page, searchTerm]);
  
  return (
    <div>
      <Toaster/>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage/>}
      {galleryImage.length > 0 && <ImageGallery items={galleryImage} onImageClick={openModal } />}
      {isLoading && <Loader />}
      {galleryImage.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMoreClick} />}
      <ImageModal  onRequestClose={closeModal} image={selectedImage} />
    </div>
  )
};


