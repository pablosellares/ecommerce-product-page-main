import styled from "styled-components";

export const StyledModal = styled.div`
align-items: center;
  background-color: ${({ theme }) => theme.colors.neutral.black75};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  row-gap: 24px;
  top: 0;
  width: 100%;
  z-index: 999;

  .btn-close {
        cursor: pointer;
        display: flex;
        justify-content: flex-end;
        height: 24px;
        margin-right: -50%;
        overflow: hidden;
        position: relative;
        width: 24px;

        &::before,
        &::after {
          background-color: ${({ theme }) => theme.colors.neutral.white};
          content: "";
          display: block;
          height: 100%;
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
    position: relative;
    width: 50%;

  &_frame {
    margin-bottom: 32px;
    width: 100%;
    position: relative;

    &__control {
        position: absolute;
        top: 50%;
        transform: translateY(-24px);
        width: 100%;
        z-index: 1000;

          &--prev,
          &--next {
            border-radius: 50%;
            content: "";
            cursor: pointer;
            height: 48px;
            position: absolute;
            width: 48px;
          }

          &--prev {
            background: url('src/assets/icon-previous.svg') center no-repeat ${({ theme }) => theme.colors.neutral.white};
            left: -24px;
            position: absolute;
            top: 50%;
          }

          &--next {
            background: url('src/assets/icon-next.svg') center no-repeat ${({ theme }) => theme.colors.neutral.white};
            right: -24px;
            top: 50%;
          }
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