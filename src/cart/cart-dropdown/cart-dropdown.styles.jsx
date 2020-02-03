import styled from 'styled-components';

export const Styles = styled.div`
  .cart-dropdown-container {
    border: 1px solid black;
    background: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    height: 340px;
    width: 260px;

    position: absolute;
    top: 75px;
    right: 20px;
    padding: 20px;
  }
  .cart-items-container {
    height: 260px;
    overflow: scroll;
  }
  .cart-items-button {
    /* background: yellowgreen; */
  }
  .cart-is-empty {
    font-size: 18px;
    margin: 50px auto;
  }
`;
