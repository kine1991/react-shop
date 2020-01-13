import styled from 'styled-components';

export const Styles = styled.div`
    .wrapper {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        /* grid-template-rows: repeat(2, 1fr); */
        grid-gap: 3rem;
    }
    .box {
        position: relative;
        border: 1px solid black;
        overflow: hidden;
        background: whitesmoke;
        grid-column-end: span 2;
        grid-row-end: span 2;
        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &:hover {
            & > img {
                transform: scale(1.1);
                transition: transform 5s ease-out;
            }
            cursor: pointer; 
        }
        
    }
    .box-label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid black;
        padding: 1rem 2rem;
        background-color: white;
        opacity: 0.7;
    }
    .large {
        grid-column-end: span 3;
        grid-row-end: span 3;
    }
`;