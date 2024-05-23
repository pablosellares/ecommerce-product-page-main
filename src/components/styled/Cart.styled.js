import styled from "styled-components";

export const StyledCart = styled.div`
background-color: ${({ theme }) => theme.colors.neutral.white};
border-radius: 8px;
filter: drop-shadow(0 0 18px rgba(0,0,0,0.2));
/* height: 256px; */
padding: 24px;
position: absolute;
right: 20px;
top: 96px;
width: 360px;

.cart-wrapper {
  height: 100%;
  /* overflow-y: scroll; */

  p{ 
    color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
    font-size: 14px;
    font-weight: 700;
  }

  .cart-description {
    font-size: 14px;
    line-height: 1.5rem;
    padding-left: 16px;
    color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};

    b {
      color: ${({ theme }) => theme.colors.neutral.black75};
      font-weight: 700;
    }
  }

  .cart-delete {
    cursor: pointer;
  }
}

h2 {
    font-size: 14px;
    margin-bottom: 32px;
    position: relative;

    &::after {
      background-color: ${({ theme }) => theme.colors.neutral.grayishBlue};
      bottom: -16px;
      content: '';
      height: 1px;
      left: -24px;
      position: absolute;
      width: calc(100% + 48px);
    }
  }

.btn-checkout {
      align-items: center;
      background-color: ${({ theme }) => theme.colors.primary.orange};
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      font-weight: 700;
      height: 56px;
      justify-content: center;
      margin-top: 24px;
      padding: 0 64px;
      transition: all 125ms ease-in-out;
      width: 100%;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.orangeHover};
      }

      img {
        width: 16px;
        filter: brightness(0);
        margin-right: 16px;
      }

      p {
        font-size: 14px;
        font-weight: 700;
      }
    }

    @media screen and (max-width: 768px){
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      left: 2.5%;
      right: auto;
      top: 80px;
      width: 95%;
      z-index: 11;

      .cart-wrapper {
        display: flex;
        justify-content: center;

        .cart-description {
          padding-right: 16px;
        }

        p {
          color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
          font-weight: 700;
        }
      }
  }
`