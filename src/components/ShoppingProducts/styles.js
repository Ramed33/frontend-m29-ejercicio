import styled from "styled-components";

const ContainerProduct = styled.article`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    background-color: #87ceeb;
`;

const TitleProduct = styled.h1`
    font-size: x-large;
`;

export {
    ContainerProduct,
    TitleProduct
}

const AppHeader = styled.header`
    padding: 25px;
    box-sizing: border-box;
    background-color: #87ceeb;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ViewCart = styled.text`
    cursor: pointer;
    font-weight: 700;
`;

export {
    AppHeader,
    ViewCart
}