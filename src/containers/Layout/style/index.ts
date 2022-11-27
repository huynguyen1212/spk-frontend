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
    border-bottom: 2px solid #eee;
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
`;

export default WrapLayout;
