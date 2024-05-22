import styled from "styled-components";

export const StyledCart = styled.div`
background-color: ${({ theme }) => theme.colors.neutral.white};
border-radius: 8px;
filter: drop-shadow(0 0 18px rgba(0,0,0,0.2));
height: 256px;
padding: 24px;
position: absolute;
right: 20px;
top: 96px;
width: 360px;

.cart-wrapper {
  height: 100%;
  overflow-y: scroll;
}
`