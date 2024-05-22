import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral.black75};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 15%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 999;

  .btn-close {
        cursor: pointer;
        display: inline-block;
        height: 24px;
        margin-top: -48px;
        margin-left: -24px;
        overflow: hidden;
        position: relative;
        width: 24px;

        &::before,
        &::after {
          background-color: ${({ theme }) => theme.colors.neutral.white};
          content: "";
          display: block;
          height: 100%;
          margin-top: -2px;
          width: 4px;
        }

        &::before {
          transform: rotate(-45deg);
          position: absolute;
          left: 50%;
        }

        &::after {
          transform: rotate(45deg);
          position: absolute;
          left: 50%;
        }
      }

  .product-image {
  padding: 0;
  width: 50%;
  
  &_frame {
    margin-bottom: 32px;
    width: 100%;
    position: relative;

    &::before,
    &::after {
      border-radius: 50%;
      content: "";
      cursor: pointer;
      height: 57px;
      position: absolute;
      width: 57px;
    }

    &::before {
      background: url('src/assets/icon-previous.svg') center no-repeat ${({ theme }) => theme.colors.neutral.white};
      top: 50%;
      transform: translate(-50%,-50%);
    }

    &::after {
      background: url('src/assets/icon-next.svg') center no-repeat ${({ theme }) => theme.colors.neutral.white};
      bottom: 50%;
      right: 0;
      transform: translate(50%, 50%);
    }

    img {
      border-radius: 16px;
      width: 100%;
    }
  }

  &_thumbnail {
    cursor: pointer;
    display: flex;
    justify-content: space-between;

    &--wrapper {
      border-radius: 18px;
      display: flex;
      height: 90px;
      justify-content: center;
      width: 90px;

      &.active {
        border: 2px solid ${({ theme }) => theme.colors.primary.orange};

        img {
          opacity: 0.5;
        }
    }

      img {
      border-radius: 16px;
      transition: all 125ms ease-in-out;
      width: 90px;

      &:hover {
        opacity: 0.75;
      }
    }
    }
  }
}
`