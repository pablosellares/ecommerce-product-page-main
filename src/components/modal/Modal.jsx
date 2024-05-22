import ProductImage from "../product/ProductImage";
import { StyledModal } from "../styled/Modal.styled";

const Modal = ({ handleModal }) => {
  return (
    <StyledModal>
      <ProductImage />
      <div className="btn-close" onClick={handleModal}></div>
    </StyledModal>
  );
};

export default Modal;
