import styled from 'styled-components';

export const Card = styled.div`
.card{
    background-color: #f9f7f6;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    position: relative;
    
    &:hover{
        .cart{
            opacity: 1;
            transition: opacity .3s;
        }

        .card__img{
            filter: alpha(opacity=70);
            opacity: .7;
            transition: opacity .3s;
        }
    }

    .cart {
        position: absolute;
        top: 1rem;
        right: 1rem;
        opacity: 0;

        :active{
            color: #7f6b00;
        }
    }

    &__img{
        width: 100%;
        object-fit: cover;
        height: 200px;
        grid-row: 1 / 2;
        grid-column: 1 / -1;
    }
    &__name{
        grid-row: 1 / 2;
        grid-column: 1 / -1;
        justify-self: center;
        align-self: end;
        z-index: 3;

        width: 80%;
        /* font-size: 1.6rem; */
        text-align: center;
        padding: .5rem;
        /* padding: 1.25rem; */
        background-color: #101d2c;
        color: #fff;
        font-weight: 400;
        transform: translateY(50%);
    }
    &__property{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 10px;
    }
    &__btn {
        background-color: #998100;
        color: #fff;
        border: none;
        border-radius: 0;
        font-size: 1rem;
        text-transform: uppercase;
        padding: .5rem;
            transition: all .2s;
        cursor: pointer;

        &:hover {
            background-color: #7f6b00;
        }
        grid-column: 1 / -1;
    }
}
`;