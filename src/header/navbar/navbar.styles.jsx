import styled from 'styled-components';

export const Styles = styled.div`
  position: relative;
  z-index: 10;

  .cart-icon {
    position: relative;
  }

  .cart-number {
    position: absolute;
    top: -8px;
    right: -8px;
    background: rebeccapurple;
    color: white;
    font-weight: 400;
    width: 16px;
    height: 16px;
    // padding: 5px;
    font-size: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  button:focus {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.08);
  }

  .menu-icon {
    display: none;

    @media (max-width: 576px) {
      display: block;
    }
  }
  /* .sidebar {
    width: 550;
    display: block;
  } */

  .desk_side-nav {
    @media (max-width: 576px) {
      display: none;
    }
  }

  .brand {
    @media (max-width: 576px) {
      display: none;
    }
  }
`;
