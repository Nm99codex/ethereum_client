import styled from "styled-components";

export const CustomHoverCard = styled.div`
    color:grey !important;
/* display: block; */
    position: relative;
    z-index: 2;
    outline: none;
    text-align: center!important;
    box-shadow: 0 5px 35px rgb(166 209 237 / 20%);
    border-radius: 10px;
    
    .cardDtails{
    z-index: 2;
    transition: all .5s ease-in-out;
   }
   .cardDetails::before{
        content: "";
    width: 95%;
    height: 95%;
    z-index: -10;
    position: absolute;
    top: auto;
    bottom: 1px;
    left: 1px;
    border-radius: 12px;
    /* background-image: linear-gradient(45deg, #e9a17b, #ff7cb0); */
    background-repeat: repeat-x;
    /* outline: 1px solid white; */
    background-color: transparent;
    /* -webkit-transition: all .5s; */
    transition: all .5s ease-in-out;
    }
    
    .cardDetails:hover::before{
    z-index: -2;
    background-image: linear-gradient(45deg, #e9a17b, #ff7cb0);
    transform: rotate(2deg) translateX(-5px) translateY(16px);
    transition: all .5s ease-in-out;
}
.cardDetails::after{
    content: " ";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    border-radius: 10px;    
    box-shadow: 0 5px 35px rgb(166 209 237 / 20%);
    z-index:-1;
    transition: all .5s ease-in-out;
}
`