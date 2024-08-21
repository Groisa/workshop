import { styled } from "styled-components";

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    

    textarea {
        background-color: transparent !important;
        border: rgba(0,0,0,0.5);
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        height: 60px;
        width: 300px;
        color: #000 !important;
        padding: 5px;
        &:hover{
            border:  rgba(0,0,0,0.3);
            border-radius: 10px;
            scale: 1.02;
            border-width: 1px;
            border-style: solid;
        }
    }
    input {
        background-color: transparent !important;
        border: rgba(0,0,0,0.5);
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        height: 40px;
        width: 300px;
        color: #000 !important;
        padding: 5px;
        &:hover{
            border:  rgba(0,0,0,0.3);
            border-radius: 10px;
            scale: 1.02;
            border-width: 1px;
            border-style: solid;
        }
    }
    @media(max-width: 765px){
        input {
            width: 100%;
        }
        textarea {
            width: 100%;
        }
    }
`
export const CheckBox = styled.input`
 &::before{
    
    position: absolute;
      display: block;
      left: 0;
      top: 0;
      content: "";
      background: transparent;
 }
 &::after{
    position: absolute;
      display: block;
      top: 5px;
      left: 8px;
      content: "";
      width: 3px;
      height: 7px;
      border-right: 1px solid transparent;
      border-bottom: 1px solid transparent;
      transform: rotate(45deg);

      transition: 200ms ease-in-out all;
 }
`