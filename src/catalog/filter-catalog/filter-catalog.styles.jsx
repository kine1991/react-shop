import styled from 'styled-components';

export const Styles = styled.div`
  .filter-container {
  }

  .small-screen {
    display: none;
    /* display: block; */
    @media (max-width: 768px) {
      display: block;
      background: red;
    }
  }
  .large-screen {
    display: block;
    @media (max-width: 768px) {
      display: none;
      /* display: none; */
    }
  }
`;
