import styled from "styled-components";

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  width: 100%;

  img {
    width: 10%;
  }
`;
export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;

`;

export const Li = styled.li`
    font-weight: 600;
    cursor: pointer;
    font-size: 28px;

    a {
        text-decoration: none;
        color: #fff;
    }
`;
