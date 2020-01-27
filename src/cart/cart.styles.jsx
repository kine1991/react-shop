import styled from 'styled-components';
export const Styles = styled.div`
  .cart-container {
    &__descriptions {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 1rem;
      margin: 1rem;
    }
    &__description {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__items {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      margin: 1rem;
      grid-gap: 1rem;
    }
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .image-container {
    width: 100px;
  }
  .image {
    width: 100%;
  }
  .delete-icon {
    &:active,
    &:hover {
      color: #7f6b00;
    }
    /* &:hover {
      color: #7f6b00;
    } */
  }
`;
