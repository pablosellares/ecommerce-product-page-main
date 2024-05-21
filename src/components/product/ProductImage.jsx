import { useState } from "react";
import Data from "./Data";

const ProductImage = () => {
  const [selectedImage, setSelectedImage] = useState(Data.main);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (image, index) => {
    setSelectedImage(image);
    setActiveIndex(index);
  };

  return (
    <div className="product-image">
      <div className="product-image_frame">
        <img src={selectedImage} alt="Selected Product" />
      </div>
      <div className="product-image_thumbnail">
        {Data.thumbnails.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleThumbnailClick(image, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
