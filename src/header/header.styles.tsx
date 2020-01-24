import styled from 'styled-components';

export const Styles = styled.div`
  .navbar {
    background-color: red;
    /* margin-bottom: 2rem; */
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    /* color: #41b; */

    &:hover {
      color: #bbb;
    }
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 1px solid red;
    /* background: red; */
  }
  .container-image {
    height: 2rem;
  }

  .logout {
    color: red;
  }
`;
