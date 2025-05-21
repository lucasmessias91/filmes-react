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
  position: relative;

  a {
    text-decoration: none;
    color: #fff;
  }

  &::after {
    content: "";
    height: 3px;
    width: ${(props) => (props.isActive ? "100%" : "0")};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    transition: width 0.3s ease-in-out;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;
