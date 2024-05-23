import { useState } from "react";
import useWindowSize from "../utils/UseWindowSize";
import Data from "./Data";

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
            ></div>
            <div
              className="product-image_frame__control--next"
              onClick={handleNextImage}
            ></div>
          </div>
          <img
            src={selectedImage}
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
                src={image}
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
