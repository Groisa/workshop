import styled from "styled-components";


export const Container = styled.section`
    background-color: #EDF1FC;
  
    min-height: 25px;
    display: flex;
    align-items: center;
    padding-inline: 10px;
    justify-content: center;
    & p {
        color: #000B41 !important;
        font-size: 14px;
        border-right-width:1px ;
        border-right-color: #000;
        border-right-style: dashed;
        padding-right: 5px
    }
    & article:first-child {
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: center;
    }
`
