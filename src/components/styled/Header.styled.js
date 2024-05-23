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

      .nav-container {
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
      }

      .nav-links {
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

      .mobile-menu-icon {
        display: none;
        font-size: 24px;
        cursor: pointer;
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
    position: relative;
    height: 68px;

    .header-left {
      flex-direction: row-reverse;
      justify-content: flex-end;
      nav {
        padding: 0;
        margin-right: 16px;
        width: auto;
        .nav-backdrop {
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          background-color:  ${({ theme }) => theme.colors.neutral.black75};
          z-index: 99;
        }
        .nav-container {
          position: relative;
          .mobile-menu-icon {
            display: flex;
            z-index: 101;
          }
          .nav-links {
            background-color: ${({ theme }) => theme.colors.neutral.white};
            display: none;
            padding: 68px 0;
            position: absolute;
            width: 75vw;
            height: 100vh;
            flex-direction: column;
            top: 0;
            left: -24px;
            z-index: 100;

            li {
              height: 32px;
              font-weight: 700;
              padding-left: 24px;
              text-align: left;
              width: 100%;
              margin: 0;
            }

            &.mobile-open {
              display: flex;
            }
          }
        }
      }
    }
    .header-right {
      .cart {
      margin-right: 20px;
    }
    }

  }
`