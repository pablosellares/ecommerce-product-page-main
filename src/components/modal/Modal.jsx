import ProductImage from "../product/ProductImage";
import { StyledModal } from "../styled/Modal.styled";

const Modal = ({ handleModal }) => {
  return (
    <StyledModal>
      <div className="btn-close" onClick={handleModal}></div>
      <ProductImage />
    </StyledModal>
  );
};

export default Modal;
