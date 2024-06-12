import styled from "styled-components";

const ContainerCart = styled.article`
    display: flexbox;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    background-color: #00ffff;
    margin: auto;
`;

const AppHeader = styled.header`
    padding: 25px;
    box-sizing: border-box;
    background-color: #87ceeb;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export {
    ContainerCart,
    AppHeader
}