import styled from "styled-components";

const ContainerCartItem = styled.article`
    box-sizing: border-box;
    background-color: #87ceeb;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
`;

const ImageCartItem = styled.img`
    width: 200px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    display: block;    
`;

const TitleCartItem = styled.h4`
    text-align: center;
`;

const PriceCartItem = styled.h5`
    text-align: center;
`;

const RemoveProduct = styled.button`
    width: 20%;
    margin: auto;
    display: block;
    border-radius: 20px;
    cursor: pointer;
    background-color: #f0f8ff;
    font-weight: 500;
`;

export {
    ContainerCartItem, 
    ImageCartItem,
    TitleCartItem,
    PriceCartItem,
    RemoveProduct
}