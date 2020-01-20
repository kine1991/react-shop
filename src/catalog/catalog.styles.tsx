import styled from 'styled-components';

export const Styles = styled.div`
    .filter-content{
        display: flex;
        flex-direction: row;

        @media (max-width: 768px) { 
            flex-direction: column;
        }
        @media (max-width: 576px) {  }
        @media (max-width: 992px) {  }
        @media (max-width: 1200px) {  }
        
    }
    .filter{
        background: #C0C0C0;
        /* height: 400px; */
        flex-basis: 200px;
        margin-right: 3rem;
        @media (max-width: 1200px) {  
            margin-right: 2rem;
        }
        @media (max-width: 768px) { 
            margin-right: 0;
        }
    }
    .content{
        /* background: #A9A9A9; */
        /* height: 400px; */
        flex: 1;
    }

    .wrapper-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 3rem;

        @media (max-width: 1200px) {
            grid-gap: 2rem;
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 992px) {
            grid-template-columns: repeat(1, 1fr);
        }
        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 2rem;
        }
        @media (max-width: 576px) {
            grid-template-columns: repeat(1, 1fr);
        }
        
    }

    /* .item {
        @media (max-width: 1200px) {
            grid-gap: 2rem;
        }
        @media (max-width: 992px) {}
        @media (max-width: 768px) {}
        @media (max-width: 576px) {}
    } */
`;