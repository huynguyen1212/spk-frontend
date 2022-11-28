import styled from 'styled-components';
import banner from 'assets/images/home/fogg-clip.png';

export const SHome = styled.div`
  .banner {
    padding: 1.5rem !important;
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
      padding: 1rem;
      margin-top: 1.5rem;

      .wrap_input {
        display: flex;
        align-items: center;
        justify-content: space-between;

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

        .select_input {
          select {
            line-height: 55px;
            height: 55px;
            width: 100%;
            font-size: 14px;
            font-weight: 500;
            color: #adb5bd !important;
            padding-left: 3rem !important;
            border: 0 !important;
            margin: 0;
            outline: 0;
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

    .popular {
      line-height: 24px;
      font-size: 12px;
      margin-left: 0.25rem;
      color: #adb5bd;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 0.5rem;

      b {
        color: #343a40;
      }
    }
  }
`;
