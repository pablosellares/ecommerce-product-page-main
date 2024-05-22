import { StyledProduct } from "../styled/Product.styled";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import Data from "./Data";

const Product = ({ addToCart, handleModal }) => {
  return (
    <StyledProduct>
      <ProductImage handleModal={handleModal} />
      <ProductInfo product={Data} addToCart={addToCart} />
    </StyledProduct>
  );
};

export default Product;
