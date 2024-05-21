import styled from "styled-components";

export const StyledProduct = styled.main`
display: flex;
padding: 90px 24px;


// Product Image Side
.product-image {
  padding: 0 64px 0 0;
  width: 50%;
  
  &_frame {
    margin-bottom: 32px;
    width: 100%;

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

// Product Information Side
.product-info {
  padding: 64px 24px 24px 64px;
  width: 50%;

  &_company {
    color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &_title {
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
    margin: 32px 0 52px;
  }

  &_description {
    color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 32px;
  }

  &_price {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    p {
      font-size: 21px;
      font-weight: 700;
    }

    span {
      background-color: ${({ theme }) => theme.colors.neutral.black};
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.neutral.white};
      font-size: 14px;
      font-weight: 700;
      margin-left: 12px;
      padding: 8px;
    }
  }

  &_price--old {
    p {
      color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
      font-size: 14px;
      font-weight: 700;
      text-decoration: line-through;
    }
  }

  &_actions {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 56px;
    margin-top: 38px;

    .qty {
      background-color: ${({ theme }) => theme.colors.neutral.lightGrayishBlue};
      border-radius: 8px;
      display: flex;
      height: 100%;
      width: 160px;

      input[type="number"] {
        color: ${({ theme }) => theme.colors.neutral.black};
        font-weight: 700;
        height: 100%;
        text-align: center;
        width: 50%;

        &::placeholder {
          color: ${({ theme }) => theme.colors.neutral.black};
        }

        &:focus {
          outline: none;
        }
      }

      &-decrease,
      &-increase {
        align-items: center;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        height: 100%;
        justify-content: center;
        width: 25%;
      }
    }

    .add-to-cart {
      align-items: center;
      background-color: ${({ theme }) => theme.colors.primary.orange};
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      height: 100%;
      padding: 0 64px;
      transition: all 125ms ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.paleOrange};
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
  }
}
`