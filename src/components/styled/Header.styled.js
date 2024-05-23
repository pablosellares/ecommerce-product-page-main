import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 112px;
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.grayishBlue};

  .header-left,
  .header-right {
    display: flex;
    align-items: center;
  }

  .header-left {
    height: 100%;
    width: 100%;

    .logo {
      height: 20px;
    }

    nav {
      font-size: 14px;
      height: 100%;
      padding: 0 50px;
      width: 100%;

      ul {
        align-items: center;
        display: flex;
        height: 100%;

        li {
          height: 100%;
          margin-right: 32px;

          a {
            align-items: center;
            display: flex;
            color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
            height: 100%;
            position: relative;
            width: 100%;

            &::after {
              background-color: ${({ theme }) => theme.colors.primary.orange};
              bottom: -24px;
              content: '';
              height: 0;
              left: 50%;
              position: absolute;
              transform: translateX(-50%);
              transition: all 250ms ease-in-out;
              width: 100%;
            }

            &:hover {

              &::after {
                height: 4px;
            }
            }
          }
        }
      }
    }
  }

  .header-right {
    position: relative;

    .indicator {
      background-color: ${({ theme }) => theme.colors.primary.orange};
      border-radius: 8px;
      color: ${({ theme }) => theme.colors.neutral.white};
      cursor: pointer;
      font-size: 10px;
      margin-left: -8px;
      position: absolute;
      text-align: center;
      transform: translate(16px, -8px);
      width: 16px;
    }

    .cart {
      cursor: pointer;
      margin-right: 40px;
    }
    .avatar {
      width: 45px;

      &:hover {
        img {
          border: 2px solid ${({ theme }) => theme.colors.primary.orange};
        }
      }

      img {
        border-radius: 50%;
        transition: all 125ms ease-in-out;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 768px){
    
    padding: 0 24px;
    height: 68px;
      nav {
          display: none;
        }
  }
`