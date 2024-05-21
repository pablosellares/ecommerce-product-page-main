import { StyledProduct } from "../styled/Product.styled";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const Product = () => {
  return (
    <StyledProduct>
      <ProductImage />
      <ProductInfo />
    </StyledProduct>
  );
};

export default Product;
