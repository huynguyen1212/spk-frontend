/*
 *
 * Layout style css file
 * make by huynq
 */

import styled from 'styled-components';

const WrapLayout = styled.div`
  .wrap_logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    margin-bottom: 20px;
    /* border-bottom: 2px solid #eee; */
    height: 64px;

    .logo {
      width: 30px;
      height: 30px;
      margin-right: 5px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    span {
      color: #05f;
      line-height: 75px;
      transition: all 0.4s ease;
      font-weight: 600;
      font-size: 28px;
    }
  }

  .wrap_header {
    padding: 0 20px 0 10px;
    display: flex;
    align-items: center;

    .header_handle {
      margin-left: 30px;
      flex: 9;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .search {
        input {
          border: unset;
          height: 40px;
          margin-left: 5px;

          &:focus-visible {
            border: unset;
            outline: unset;
          }
        }
      }

      .handle_right {
        display: flex;
        align-items: center;
        margin: 0 -10px;
        cursor: pointer;

        .handle_right_item {
          margin: 0 10px;
          position: relative;

          .icon {
          }

          .icon_hover {
            display: none;
            content: '';
            position: absolute;
            top: 50px;
            background-color: #fff;
            width: 300px;
            padding: 25px 30px;
            box-shadow: 0 15px 125px rgb(0 0 0 / 22%);
            border-radius: 6px;
            z-index: 999;
            border: 0;
            position: absolute;
            right: -15px;
            text-align: left;
            transition: all 0.4s ease;

            &::before {
              position: absolute;
              content: '';
              clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
              height: 10px;
              width: 20px;
              top: -9px;
              right: 14px;
              background-color: #fff;
            }
            &::after {
              position: absolute;
              content: '';
              height: 10px;
              width: 100%;
              top: -9px;
              right: 0;
              background-color: transparent;
            }
          }

          &:hover {
            .icon_hover {
              display: block;
            }
          }
        }
      }
    }
  }
`;

export default WrapLayout;
