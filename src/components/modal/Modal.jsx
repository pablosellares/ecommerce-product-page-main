import ProductImage from "../product/ProductImage";
import { StyledModal } from "../styled/Modal.styled";

const Modal = () => {
  return (
    <StyledModal>
      <ProductImage />
      <div className="btn-close"></div>
    </StyledModal>
  );
};

export default Modal;
