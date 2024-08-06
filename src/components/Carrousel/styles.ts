import styled from "styled-components";



export const CarrouselContainer = styled.div`
    scroll-behavior: smooth;
    transition: 0.3s linear all;
    height: 80dvh;
    width:100vw;
    display: flex;
    overflow-x: scroll;
    & img {
            width: 1500px !important;
            flex : 1;
            height: 100%;
            object-fit: cover;
    }
`