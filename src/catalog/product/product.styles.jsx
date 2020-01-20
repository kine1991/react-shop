import styled from 'styled-components';

export const Styles = styled.div`
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;

        &__price {
            color: #7f6b00;
        }
    }
    .content{
        display: flex;

        @media (max-width: 768px) { 
            flex-direction: column;
        }


        &__img{
            flex: 2;
            margin-right: 3rem;
            & > img {
                width: 100%;
            }
            @media (max-width: 992px) {
                flex: 3;
            }
            @media (max-width: 768px) { 
                margin-right: 0;
            }
        }

        &__body{
            flex: 1;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 1rem;

            font-family: 'Nunito Sans', sans-serif;
            font-weight: 100;

            @media (max-width: 992px) {
                flex: 2;
                font-size: 14px;
                grid-gap: .2rem;
            }
        }
    }

    .description{
        grid-column: 1/-1;
    }
    .property{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
