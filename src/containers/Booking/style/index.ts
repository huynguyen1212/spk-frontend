/*
 *
 * Booking style css file
 * make by huynq
 */

import styled from 'styled-components';
import banner from 'assets/images/home/fogg-clip.png';

const WrapBooking = styled.div`
  .banner {
    padding: 1.5rem;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-color: #e4f6fe;
    border-radius: 10px;

    margin-bottom: 30px;

    .title {
      font-weight: 400;
      font-size: 50px;
      margin-bottom: 0.5rem;
      line-height: 1.2;
      color: #111;
      margin-top: 0;
    }

    .title_lit {
      font-weight: 500;
      color: #adb5bd;
      margin-left: 0.25rem;
      margin-top: 0;
      margin-bottom: 0.5rem;
      line-height: 24px;
      font-size: 12px;
    }

    .banner_search {
      margin-bottom: 1rem;
      background-color: #fff;
      border: 1px solid #e1e1f0;
      border-color: #f7f7f7;
      border-radius: 0.3rem;
      padding: 0.5rem;
      margin-top: 1.5rem;

      .wrap_input {
        .input {
          display: flex;
          align-items: center;
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
      }

      .btn_search {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        button {
          height: 55px;
          line-height: 55px;
          letter-spacing: 1px;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          user-select: none;
          border-radius: 0.25rem;
          transition: color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
          background-color: #05f;
          border: 0;
          width: 80%;
          color: #fff;
          text-transform: uppercase;
          font-size: 12px;
        }
      }
    }
  }

  .advisors {
    margin-bottom: 20px;

    .advisors_content {
      .item {
        margin-right: 10px;
        cursor: pointer;
        border-radius: 4px;
        border: 0;

        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #f0f0f0;
        background-clip: border-box;
        padding: 20px 0;

        .img {
          overflow: hidden;
          margin-bottom: 1rem;
          width: 100%;
          border-radius: 4px;

          img {
            vertical-align: middle;
            border-style: none;
            width: 100%;
          }
        }

        .item_infor {
          min-height: 1px;
          padding: 1.25rem;
          padding-top: 0;

          .name {
            margin-bottom: 0.5rem;
          }

          .desc {
            font-weight: 700;
            margin-top: 1rem;
            font-size: 16px;
            color: #111;
            line-height: 28px;
            margin-bottom: 0.5rem;
          }
        }

        .price {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .date_picker {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .booking {
          display: flex;
          justify-content: center;

          button {
            height: 35px;
            line-height: 40px;
            letter-spacing: 1px;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            user-select: none;
            border-radius: 0.25rem;
            transition: color 0.15s ease-in-out,
              background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
            background-color: #05f;
            border: 0;
            width: 80%;
            color: #fff;
            text-transform: uppercase;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`;

export default WrapBooking;
