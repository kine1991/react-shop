import styled from 'styled-components';

export const Styles = styled.div`
  .settings {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    &__content {
      flex: 1;
      @media (max-width: 768px) {
        order: 2;
      }
    }

    &__sidebar {
      flex-basis: 300px;
      margin-left: 3rem;
      @media (max-width: 768px) {
        margin-left: 0;
        flex: 1;
        order: 1;
      }
      @media (max-width: 768px) {
        margin-bottom: 3rem;
      }
    }
  }

  .user-info-large {
    display: block;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .user-info-small {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;