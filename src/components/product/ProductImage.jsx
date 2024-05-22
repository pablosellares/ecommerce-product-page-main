import { useState } from "react";
import Data from "./Data";

const ProductImage = ({ handleModal }) => {
  const [selectedImage, setSelectedImage] = useState(Data.main);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (image, index) => {
    setSelectedImage(image);
    setActiveIndex(index);
  };

  return (
    <>
      <div className="product-image">
        <div className="product-image_frame">
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
