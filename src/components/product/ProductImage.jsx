import { useState } from "react";
import Data from "./Data";

const ProductImage = ({ handleModal }) => {
  const [selectedImage, setSelectedImage] = useState(Data.main);
  const [activeIndex, setActiveIndex] = useState(0);

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
            onClick={handleModal}
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
