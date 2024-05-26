import { useState } from "react";
import useWindowSize from "../utils/UseWindowSize";
import Data from "./Data";
import { getImageURL } from "../utils/getImage";

const ProductImage = ({ handleModal }) => {
  const [selectedImage, setSelectedImage] = useState(Data.main);
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowSize();

  const isMobile = width <= 768; // Define your mobile breakpoint

  const handleThumbnailClick = (image, index) => {
    setSelectedImage(image);
    setActiveIndex(index);
  };

  const handlePrevImage = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      setSelectedImage(Data.thumbnails[newIndex]);
      setActiveIndex(newIndex);
    }
  };

  const handleNextImage = () => {
    if (activeIndex < Data.thumbnails.length - 1) {
      const newIndex = activeIndex + 1;
      setSelectedImage(Data.thumbnails[newIndex]);
      setActiveIndex(newIndex);
    }
  };

  const handleImageClick = () => {
    if (!isMobile) {
      handleModal();
    }
  };

  return (
    <>
      <div className="product-image">
        <div className="product-image_frame">
          <div className="product-image_frame__control">
            <div
              className="product-image_frame__control--prev"
              onClick={handlePrevImage}
            >
              <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div
              className="product-image_frame__control--next"
              onClick={handleNextImage}
            >
              <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <img
            src={getImageURL(selectedImage)}
            alt="Selected Product"
            onClick={handleImageClick}
          />
        </div>

        <div className="product-image_thumbnail">
          {Data.thumbnails.map((image, index) => (
            <div
              key={index}
              className={`product-image_thumbnail--wrapper ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <img
                src={getImageURL(image)}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail"
                onClick={() => handleThumbnailClick(image, index)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImage;
